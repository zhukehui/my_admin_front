<template>
    <div class="app-container tabel-list-container">
        <div class="synerToSendForm">
            <!-- <el-row type="flex" class justify="center" style="margin-left: 32px">
                <el-col :span="24">
                    <el-row style="margin-left: -30px">
                        <h3>管理</h3>
                    </el-row>
                </el-col>
            </el-row> -->
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="三体表单列表 " name="first">
                    <el-col :span="5" style="margin-top: 5px">
                        <el-input v-model.trim="form_no" placeholder="表单号" @keyup.enter.native="search">
                            <el-button slot="append" class="searchBtn" icon="el-icon-search" @click="search" />
                        </el-input>
                    </el-col>
                    <el-col>
                        <el-table
                            :data="tableData"
                            :header-cell-style="{ color: '#606266' }"
                            tooltip-effect="dark"
                            stripe
                            :cell-style="{ padding: '4px', color: '#606266' }"
                            :header-row-style="{ height: '48px' }"
                            :row-style="{ height: '48px' }"
                            class="tabelStyle"
                        >
                            <el-table-column show-overflow-tooltip prop="form_title" label="标题" />
                            <el-table-column show-overflow-tooltip prop="form_no" label="表单号" >
                                <template slot-scope="scope">
                                    <el-button type="text" @click="formInfo(scope.row)">{{scope.row.form_no}}</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column show-overflow-tooltip prop="form_status" label="流程状态">
                                <template slot-scope="scope">
                                    {{ formStatusList[scope.row.form_status] }}
                                </template>
                            </el-table-column>
                            <el-table-column show-overflow-tooltip prop="process_ins_id" label="流程实例ID" />
                            <el-table-column show-overflow-tooltip prop="form_key" label="表单类型" />
                            <el-table-column show-overflow-tooltip prop="apply_user" label="发起人" />
                            <el-table-column show-overflow-tooltip prop="create_time" label="发起时间" />
                            <el-table-column :key="1" prop="date" label="操作" width="300">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" v-if="scope.row.form_status == 1 || scope.row.form_status == 2  || scope.row.form_status == 3" @click="approval(scope.row)">审批</el-button>
                                    <el-button type="primary" size="mini" @click="procedure(scope.row)">流程图</el-button>
                                    <el-button type="primary" size="mini" v-if="scope.row.form_status == 1 || scope.row.form_status == 2  || scope.row.form_status == 3" @click="oneClickApproval(scope.row)">一键审批</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-tab-pane>
            </el-tabs>

            <el-row style="margin-top: 15px">
                <Pager
                    :pageNum="searchData.pageNum"
                    :pageSize="searchData.pageSize"
                    :total="total"
                    :handleSizeChange="handleSizeChange"
                    :handleCurrentChange="handleCurrentChange"
                />
            </el-row>
        </div>

        <!-- 组件 -->
        <div>
            <el-dialog
                title="流程详情"
                :visible.sync="dialogVisible"
                width="45%"
                :close-on-click-modal="false"
                :fullscreen="fullScreenFlag"
                @close="handleClose"
            >
                <el-divider />
                <span slot="title" class="dialog-footer">
                    <span>流程详情</span>
                    <i class="el-icon-full-screen" style="float: right; margin-right: 25px; color: #909399" @click="setFullScreen" />
                </span>
                <el-row>
                    <img style="width: 100%; height: 100%" :src="codeImg" alt />
                </el-row>
                <span slot="footer" class="dialog-footer">
                    <el-divider />
                    <el-button type="primary" @click="handleClose">确 定</el-button>
                </span>
            </el-dialog>
        </div>

        <el-dialog title="表单当前节点信息" :visible.sync="dialogTableVisible">
            <el-table :data="formInfoData">
              <el-table-column property="form_no" label="表单号"/>
              <el-table-column property="apply_user" label="发起人"/>
              <el-table-column property="NAME_" label="当前节点cn"/>
              <el-table-column property="TASK_DEF_KEY_" label="当前节点en"/>
              <el-table-column property="ASSIGNEE_" label="审批人"/>
              <el-table-column property="PROC_INST_ID_" label="流程实例id"/>
              <el-table-column property="CREATE_TIME_" label="创建时间"/>
            </el-table>
          </el-dialog>
    </div>
</template>

<script>
    import Pager from '@/components/Pager/index.vue';
    import request from '@/utils/request';
    // 查询所有表单信息
    export function getAllList(data) {
        return request({
            url: `/query_form_all`,
            method: 'post',
            data
        });
    }
    // 查询当前表单节点信息
    export function getQueryProcess(formNo) {
        return request({
            url: `/query_process_node_by_form_no?formNo=${formNo}`,
            method: 'get'
        });
    }
    // 查看流程图
    export function getProcessImg(formNo) {
        return request({
            url: `/view_process_img?formNo=${formNo}`,
            method: 'get'
        });
    }
    // 单节点审批
    export function Approval(formNo) {
        return request({
            url: `/approval`,
            method: 'post',
            data: {
                formNo
            }
        });
    }
    // 一键审批
    export function oneKeyApproval(formNo) {
        return request({
            url: `/one_key_approval`,
            method: 'post',
            data: {
                formNo
            }
        });
    }

    export default {
        components: {
            Pager
        },
        data() {
            return {
                activeName: 'first',
                searchData: {
                    pageNum: 1,
                    pageSize: 10
                },
                total: 0,
                form_no: '',
                apply_user: '',
                form_key: '',
                form_status: '',
                process_ins_id: '',
                form_title: '',

                tableData: [],
                formInfoData:[],
                dialogTableVisible:false,
                formKeyList: {
                    customer_main_process_v2: '客户申请',
                    customer_access_process_v2: '客户接入申请',
                    customer_invoice_process_v2: '开票申请',
                    customer_contact_process_v2: '联系人申请',
                    contract_main_process_v2: '法审申请',
                    quote_approval_main_process_v2: '报价申请',
                    calculate_approval_main_process_v2: '计费申请',
                    bill_approval_main_process_v2: '账单申请',
                    project_main_process_v2: '立项申请',
                    data_extract_approval_main_process_v2: '提数申请',
                    customer_sub_process_v2: '子账号申请',
                    bill_approval_commission_process_v2: '批量账单申请',
                    api_become_regular_process_v2: '接口申请'
                },
                formStatusList: ['草稿', '进行中', '进行中', '回退', '通过', '终止', '拒绝', '撤回'],
                // 流程图相关
                dialogVisible: false,
                codeImg: null,
                fullScreenFlag: false
            };
        },

        created() {
            this.getList();
        },

        methods: {
            // 点击切换标签页
            handleClick(tab) {
                console.log(tab);
            },

            // 点击搜索
            search(row) {
                this.searchData.pageNum = 1;
                this.getList();
            },

            // 获取列表
            getList() {
                const data = {
                    form_no: this.form_no,
                    apply_user: this.apply_user,
                    form_key: this.form_key,
                    form_status: this.form_status,
                    process_ins_id: this.process_ins_id,
                    form_title: this.form_title,
                    pageNum: this.searchData.pageNum,
                    pageSize: this.searchData.pageSize
                }
                getAllList(data).then((res) => {
                    this.tableData = res.data;
                    this.total = res.total;
                    this.searchData.pageNum = res.pageNum;
                });
            },

            // 查询表单当前节点信息
            formInfo(row) {
                getQueryProcess(row.form_no).then((res) => {
                    this.dialogTableVisible = true;
                    this.formInfoData = res.data;
                });
            },

            // 审批按钮
            approval(row) {
                Approval(row.form_no).then((res) => {
                    if (res.errorCode === 0) {
                        this.$message({
                            message: '审核成功',
                            type: 'success'
                        });
                        this.getList();
                    }
                });
            },

            // 一键审批按钮
            oneClickApproval(row) {
                oneKeyApproval(row.form_no).then((res) => {
                         this.$message({
                            message: res.data,
                            type: 'success'
                        });
                        this.getList();
                    // let msg = '一键审核成功审批信息：' + `\n`

                    // if (res.errorCode === 0) {
                    //     this.$nextTick(
                    //         res.data.forEach(i => {
                    //             msg += i + `\n`
                    //         })
                    //     )
                        
                    //     this.$message({
                    //         message: msg,
                    //         type: 'success'
                    //     });
                    //         // msg:  '一键审核成功审批信息：' + "\n" + res.data,
                            
                    //         // message: <span style="white-space: pre-wrap;">{{msg}}</span>,
                    //         // type: 'success'
                    //     this.getList();
                    // }
                });
            },

            // 流程图相关
            // 展示弹出窗
            procedure(row) {
                getProcessImg(row.form_no).then((res) => {
                    this.codeImg = `data:image/png;base64,${res.data}`;
                    this.dialogVisible = true;
                });
            },

            // 关闭弹窗
            handleClose() {
                this.dialogVisible = false;
                this.fullScreenFlag = false;
            },

            // 全屏
            setFullScreen() {
                this.fullScreenFlag = !this.fullScreenFlag;
            },

            // 分页器
            handleSizeChange(val) {
                this.searchData.pageSize = val;
                this.getList();
            },
            handleCurrentChange(val) {
                this.searchData.pageNum = val;
                this.getList();
            },
            current_change(val) {
                this.searchData.pageNum = val;
                this.getList();
            },
            prev_click() {
                this.searchData.pageNum--;
                this.getList();
            },
            next_click() {
                this.searchData.pageNum++;
                this.getList();
            }
        }
    };
</script>
