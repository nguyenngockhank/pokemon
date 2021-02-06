<template>
  <div class="full-width">
    <h1 class=" center-content">Pokemon Type effectiveness and weakness</h1>

    <el-checkbox-group v-model="checkedColumns">
      <el-checkbox v-for="column in columnOptions" 
        :label="column.key" 
        :key="column.key"
        :filters="columnOptions"
      >{{column.label}}</el-checkbox>
    </el-checkbox-group>

     <el-table
      :data="tableData"
      style="width: 100%">

      <el-table-column width="120" label="Poke Type"
        sortable
        prop="name"
      >
        <template slot-scope="scope">
          <PokeType :type="scope.row.name" :size="2"></PokeType>
        </template>
      </el-table-column><!-- fixed column -->


      <el-table-column
        v-for="tableColumn in tableColumns"
        :key="tableColumn.key"
        :label="tableColumn.label"
        :class-name="`item-${tableColumn.key}`"
        :label-class-name="`header-${tableColumn.key}`"
      >
        <template slot-scope="scope">
          <PokeType  
            v-for="type in scope.row[tableColumn.attr]"  
            :type="type"
            :key="type"
          />
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { TYPE_ENCOUNTER_INFO } from "../store/poketype";
import PokeType from "./PokeType"

export default {
  data() {
    return {
      checkedColumns: [
        "strong", "weak", "vulnerable", "resistant"
      ],
    }
  },
  components: { PokeType },
  computed: {
    tableData() {
      return Object.values(TYPE_ENCOUNTER_INFO)
    },
    filterTypeOptions() {
      return this.tableData.map(item => ({
        text: item.name,
        value: item.name,
      }))
    },
    columnOptions() {
      return [
        { label: "Strong Against", key: "strong", attr: "strongAgainst" },
        { label: "Resistant To", key: "resistant", attr: "resistantTo" },
        { label: "Weak Against", key: "weak", attr: "weakAgainst" },
        { label: "Vulnerable To", key: "vulnerable", attr: "vulnerableTo" },
      ]
    },
    tableColumns() {
      return this.columnOptions.filter(item => this.checkedColumns.includes(item.key))
    }
  },
  methods: {
    filterType(value, row) {
      return row.name === value;
    },
  }
}
</script>

<style >

.header-vulnerable {
    color: #212529;
}
.item-vulnerable {
    background: #adb5bd;
}
.header-weak {
    color: #dc3545;
}
.item-weak {
    background: #f1aeb5;
}
.header-strong {
    color: #479f76;
}
.item-strong {
    background: #a3cfbb;
}
.header-resistant {
    color: #0d6efd;
} 
.item-resistant {
    background: #6ea8fe;
}
</style>