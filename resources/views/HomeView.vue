<template>
  <div>
    <!-- <h3 class="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3> -->
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <CardStat
        v-for="item in stats"
        :key="item.id"
        :loading="loading"
        :name="item.name"
        :stat="item.stat"
        :icon="item.icon"
        :change="item.change"
        :changeType="item.changeType"
        :link="getLink(item)"
      />
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import CardStat from '@/components/cards/CardStat.vue'
import { fetchStatsCustomersLicenses } from '@/api/stats'
import { CursorArrowRaysIcon, KeyIcon, UsersIcon } from '@heroicons/vue/24/solid'

export default defineComponent({
  components: { CardStat },
  setup() {
    const loading = ref(true)
    const stats = ref([
      {
        id: 1,
        name: 'Active users',
        stat: 193,
        icon: UsersIcon,
        change: '30%',
        changeType: 'increase'
      },
      {
        id: 2,
        name: 'Customers with active licenses',
        stat: 0,
        icon: KeyIcon,
        change: '2%',
        changeType: 'increase'
      },
      {
        id: 3,
        name: 'Customers with licenses expiring soon',
        stat: 0,
        icon: CursorArrowRaysIcon
      },
      {
        id: 4,
        name: 'Customers without license',
        stat: 0,
        icon: CursorArrowRaysIcon
      }
    ])
    const getLink = (item: any) => {
      switch (item.id) {
        case 1: {
          return {
            name: 'customers',
            params: { id: item.id }
          }
        }
        case 2: {
          return {
            name: 'customers',
            query: { status: 'active' }
          }
        }
        case 3: {
          return {
            name: 'customers',
            query: { status: 'expiringSoon' }
          }
        }
        case 4: {
          return {
            name: 'customers',
            query: { status: 'expired' }
          }
        }
      }
      return {
        name: '#'
      }
    }

    const fetchStats = async () => {
      try {
        const response = await fetchStatsCustomersLicenses()
        // const response = await axios.get('https://your-api-endpoint.com/stats')
        const data = response.data

        // Transform the data to match the expected format for StatCard components
        stats.value[1].stat = data.customers_active_license_count
        stats.value[2].stat = data.customers_license_expiring_soon
        stats.value[3].stat = data.customers_expired_license_count
        // stats.value = data.map((stat: any) => ({
        //   id: stat.id,
        //   name: stat.name,
        //   stat: stat.value,
        //   icon: getIcon(stat.type), // Assuming you have a method to determine the icon
        //   change: stat.change,
        //   changeType: stat.changeType
        // }))
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchStats)

    return { stats, loading, getLink }
  }
})
</script>
