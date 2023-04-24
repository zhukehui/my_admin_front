<template>
    <div>
        <el-pagination
            :current-page="pageNum"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="pageSize"
            layout="total, sizes, -> , prev, pager, next"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
    export default {
        name: 'Pager',
        props: {
            pageNum: {
                type: Number,
                default: null
            },
            pageSize: {
                type: Number,
                default: null
            },
            total: {
                type: Number,
                default: null
            },
            handleSizeChange: {
                type: Function,
                default: () => {}
            },
            handleCurrentChange: {
                type: Function,
                default: () => {}
            }
        },

        data() {
            return {};
        },

        methods: {}
    };
</script>
