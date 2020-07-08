<template>

  <table class="info-table">
    <thead>
      <tr>
        <th
          v-for="(item, idx) in data.head"
          :key="item.title"
          :class="['head', ...getClassesForColumn(idx)]"
          scope="col"
        >
          {{ item.title }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(dataset, idx) in data.body"
        :key="idx"
      >
        <td
          v-for="(datum, idx) in dataset"
          :key="idx"
          :class="['cell', ...getClassesForColumn(idx)]"
        >
          {{ datum }}
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  name: 'InfoTable',

  props: {
    data: Object,
  },

  methods: {
    getClassesForColumn(idx) {
      const { modification = '' } = this.data.head[idx];
      const classList = [];

      switch (modification) {
        case 'is-less-important':
          classList.push('--less-important');
          break;

        case 'is-number':
          classList.push('--is-number');
          break;

        default:
      }

      return classList;
    },
  },
};
</script>

<style scoped lang="scss">

@import '@/assets/scss/_variables';

.info-table {
  .cell,
  .head {
    width: 40%;
    padding: $xxs;
    text-align: left;
  }

  .head {
    font-weight: $fw-normal;
  }

  .cell {
    padding: $xxs;
    border-top: solid $border-width $border-color;
  }

  tr:nth-child(even)>td {
    background-color: $lighter;
  }

  .--less-important {
    display: none;
  }

  @media only screen and (min-width: 40 * $m) {
    .--less-important {
      display: table-cell;
      width: 30%;
    }
  }

  .--is-number {
    width: 10%;
    text-align: right;
  }
}

</style>
