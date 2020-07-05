<template>
  <div class="table">
    <h1>{{ msg }}</h1>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      ></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div class="sort">
      <input type="text" v-model="searchName">
      <ul>
        <li v-for="(p, index) in filterPersons" :key="index">
          {{index}}-----{{p.name}}-----{{p.age}}
        </li>
      </ul>
      <button @click="setOrderType(1)">年龄升序</button>
      <button @click="setOrderType(2)">年龄降序</button>
      <button @click="setOrderType(0)">原本顺序</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '后台信息表格筛选',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }],
      searchName: '',
      orderType: 0, // 1代表升序，2代表降序
      persons: [
        {name: 'Tom', age: 18},
        {name: 'Jack', age: 16},
        {name: 'Bob', age: 19},
        {name: 'Rose', age: 17}
      ]
    }
  },
  computed: {
    filterPersons () {
      // 取出相关数据
      const {searchName, persons, orderType} = this
      // 最终需要显示的数组
      let fPersons
      // 对Persons进行过滤
      fPersons = persons.filter(p => p.name.indexOf(searchName) !== -1)
      // 排序
      if (orderType !== 0) {
        fPersons.sort(function (p1, p2) { // 如果返回负数p1在前，返回正数p2在前
          if (orderType === 2) {
            return p2.age - p1.age
          } else {
            return p1.age - p2.age
          }
        })
      }
      return fPersons
    }
  },
  methods: {
    setOrderType (ordertype) {
      this.orderType = ordertype
    },
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  background: lightyellow;
  width:100%;
  margin:auto;
  padding-top:1rem;
  padding-bottom:1rem;
  el-table {
    background: transparent;
    width:90%;
  }
}
</style>