<template>
    <div class="app-container tabel-list-container">
        <div class="synerToSendForm">
            <el-row type="flex" class justify="center" style="margin-left: 32px">
                <el-col :span="24">
                    <el-row style="margin-left: -30px">
                        <el-button style="position: absolute; top: 0; right: 50px;z-index: 10;" type="primary" @click="dialogFormVisible = true" plain>计算</el-button>
                    </el-row>
                </el-col>
            </el-row>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="历史电费信息 " name="first">
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
                            <el-table-column show-overflow-tooltip prop="name" label="名称" />
                            <el-table-column show-overflow-tooltip prop="electric_quantity" label="截止本月电量(°)" />
                            <el-table-column show-overflow-tooltip prop="used_electricity" label="本月已用电量(°)" />
                            <el-table-column show-overflow-tooltip prop="unit_price" label="单价(元)" />
                            <el-table-column show-overflow-tooltip prop="amount" label="本月电费(元)" />
                            <el-table-column show-overflow-tooltip prop="date_calculation" label="时间" />
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

        <el-dialog width="30%" title="计算信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="房间①当前电量(°)">
                <el-input v-model="form.electric_quantity_1" style="width:20%"></el-input>
              </el-form-item>
              <el-form-item label="房间②当前电量(°)">
                <el-input v-model="form.electric_quantity_2" style="width:20%"></el-input>
              </el-form-item>
              <el-form-item label="房间③当前电量(°)">
                <el-input v-model="form.electric_quantity_3" style="width:20%"></el-input>
              </el-form-item>
              <el-form-item label="当月电费(元)">
                <el-input v-model="form.amount" style="width:20%"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="calculationAmount">确 定</el-button>
            </div>
          </el-dialog>

        <el-dialog title="结算" :visible.sync="dialogTableVisible">
            <el-table :data="tableInfo" show-summary>
              <el-table-column property="name_" label="名称"/>
              <el-table-column property="month_calculation" label="截至当月电量(°)"/>
              <el-table-column property="electric_quantity" label="本月已用电量(°)"/>
              <el-table-column property="unit_price" label="单价(元)"/>
              <el-table-column property="amount" label="当月电费(元)"/>
            </el-table>
          </el-dialog>
    </div>
</template>

<script>
    import Pager from '@/components/Pager/index.vue';
    import request from '@/utils/request';
    // 查询所有信息
    export function getAllList(data) {
        return request({
            url: `/query_calculation_all`,
            method: 'post',
            data
        });
    }

    // 计算
    export function calculation(data) {
        return request({
            url: `/calculation`,
            method: 'post',
            data
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
                form:{
                    electric_quantity_1:null,
                    electric_quantity_2:null,
                    electric_quantity_3:null,
                    amount:null
                },
                tableData: [],
                tableInfo: [],
                formInfoData:[],
                dialogTableVisible:false,
                dialogFormVisible: false,

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
                    pageSize: this.searchData.pageSize
                }
                getAllList(data).then((res) => {
                    this.tableData = res.data;
                });
            },
            // 计算
            calculationAmount() {
                calculation(this.form).then((res) => {
                    this.tableInfo = res.data;
                    this.dialogFormVisible = false
                    this.dialogTableVisible = true
                    this.getList()
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
