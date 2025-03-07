/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  MONITORING: '監控',
  'Monitoring Center': '監控中心',
  'Physical Resources': '物理資源',
  PHYSICAL_RESOURCES_MONITORING: '物理資源監控',
  SERVICE_COMPONENT_MONITORING: '服務組件監控',
  'Application Resources': '應用資源',
  APPLICATION_RESOURCE_PL: '應用資源監控',
  PHYSICAL_RESOURCE_PL: 'Physical Resources',

  NODE_COUNT: '節點數量',
  CLUSTER_STATUS: '集群狀態',
  'Cluster Monitors': '集群監控',
  'Cluster Resource Monitoring': '集群資源監控',
  ETCD_MONITORING: 'etcd 監控',
  'ETCD Service Status': 'etcd 服務狀態',
  'ETCD Nodes': 'etcd 節點',
  SERVICE_STATUS: '服務狀態',
  EXTERNAL_ETCD: '外部 etcd',
  API_SERVER_MONITORING: 'API Server 監控',
  SCHEDULER_MONITORING: '調度器監控',
  'Historical Monitoring': '歷史監控',
  RESOURCE_USAGE_RANKING: 'Resource Usage Ranking',
  'Usage Ranking': '用量排行',
  'Resources Usage': '資源用量',
  'Resources Usage Trend': '資源用量趨勢',
  'Physical Resources Usage': '物理資源用量',
  APPLICATION_RESOURCES_USAGE: '應用資源用量',
  PHYSICAL_RESOURCES: '物理資源用量',
  APPLICATION_RESOURCE_USAGE: '應用資源用量',
  PROJECT_CHANGE_TREND: '項目變化趨勢',
  PROJECT_COUNT: '項目數量',
  CLUSTER_RESOURCE_USAGE: '集群資源使用情況',
  RESOURCE_USAGE: '資源使用情況',
  CLUSTER_NODE_STATUS: '集群節點狀態',
  COMPONENT_STATUS: '組件狀態',
  PHYSICAL_RESOURCE_STATUS: '物理資源狀態',
  'Disk Usage': '硬碟使用量',
  'Disk Capacity': '硬碟容量',
  INODE_USAGE: 'Inode Usage',
  RUNNING_PODS: 'Running Pods',
  'Abnormal Pods': '異常容器組',

  CONTROLLER_MANAGER: '管理控制中心',
  KUBERNETES_SCHEDULER: 'K8s 調度器',
  SCHEDULER: '調度器',
  Node: '節點',

  SELECT_TIME_RANGE: '選擇時間範圍',
  CUSTOM_TIME_RANGE: '自定義時間範圍',
  SHOW_SELECTED_ONLY: '僅顯示已選',
  VIEW_ALL_REPLICAS: '查看所有副本',
  'View All': '查看全部',
  VIEW_MORE: '查看更多',

  Interval: '間隔',
  Last: '最近',
  LAST_TIME_S: '最近 {num} 秒',
  LAST_TIME_M: '最近 {num} 分鐘',
  LAST_TIME_H: '最近 {num} 小時',
  LAST_TIME_D: '最近 {num} 天',
  TIME_M: '{num} 分鐘',
  TIME_H: '{num} 小時',
  TIME_D: '{num} 天',
  UTILIZATION: '使用率',
  RESOURCE_USAGE_TITLE: '資源使用情况',
  MONITORING_CLUSTER_DESC:
    'Cluster status displays the overview and details of cluster resources. You can view the monitoring data and the usage ranking of cluster resources.',
  MONITORING_PHYSICAL_DESC: '監控集群物理資源的運行狀態',
  MONITORING_APPLICATION_DESC:
    'Application resources provide the monitoring data of application resource usage and usage ranking.',
  TIMERANGE_SELECTOR_MSG: '結束時間需晚於開始時間。',
  MONITORING_SELECT_LIMIT_MSG: '最多可以選擇 10 個資源',

  second: '秒',
  ms: '毫秒',
  times: '次',
  'times/s': '次/秒',
  USAGE_RANKING: 'Usage Ranking',
  OUTBOUND_TRAFFIC: 'Outbound Traffic',
  INBOUND_TRAFFIC: 'Inbound Traffic',
  QUOTA: 'Quota',
  QUOTA_PL: 'Quotas',
  QUOTA_VALUE: 'Quota: {value}',
  RAFT_PROPOSAL: 'Raft 提議',
  PROPOSAL_COMMIT_RATE: '提議提交速率',
  PROPOSAL_APPLY_RATE: '提議應用速率',
  PROPOSAL_PENDING_TOTAL: '提議待處理總數',
  DB_SIZE: '資料庫大小',
  CLIENT_TRAFFIC: '客戶端流量',
  RECEIVED: '接收',
  SENT: '發送',
  GRPC_STREAM_MESSAGES: 'gRPC 流式訊息',
  WAL_FSYNC: 'WAL 紀錄同步時間',
  DB_FSYNC: '資料庫同步時間',
  REQUEST_LATENCY: '請求延遲',
  REQUEST_LATENCY_MS: 'Request Latency (ms)',
  'Total Average': '總平均值',
  'APIs Average': 'APIs 平均值',
  REQUEST_PER_SECOND: '每秒請求數',
  API_REQUESTS_PER_SECOND: '每秒 API 請求數',
  API_REQUEST_LATENCY: 'API 請求延遲',
  REQUEST: '請求',
  REQUEST_COUNT: 'Requests',
  SCHEDULE_ATTEMPTS: '調度次數',
  SCHEDULING_RATE: '調度速率',
  SCHEDULING_LATENCY: '調度延遲',

  AVERAGE: '平均值',
  TOTAL_AVERAGE: '總平均值',
  SUCCESS: '成功',
  NOT_SUCCESSFUL: 'Not successful',
  ERROR: '錯誤',
  FAILURE: '失敗',
  ETCD_NODE_TITLE: 'ETCD節點',
  ETCD_LEADER_TITLE: 'Leader exists',
  ETCD_CHANGES_TITLE: 'Leader changes in 1 h',
  ETCD_STATUS: '服務 <span>狀態</span>',
  ETCD_PROPOSAL: 'Raft <span>提議</span>',
  ETCD_DB_SIZE: '資料庫 <span>大小</span>',
  ETCD_CLIENT_TRAFFIC: '客戶端 <span>流量</span>',
  REQUEST_LATENCY_TCAP: '請求 <span>延遲</span>',
  REQUEST_RATE: '請求 <span>速率</span>',
  SCHEDULE_ATTEMPTS_TCAP: '調度 <span>次數</span>',
  SCHEDULING_RATE_TCAP: '調度 <span>速率</span>',
  PROPOSAL_COMMITTED: '提議提交速率',
  PROPOSAL_APPLIED: '提議應用速率',
  PROPOSAL_FAILED: '提議失敗速率',
  PROPOSAL_PENDING: '提議待處理數',

  EDIT_TEMPLATE: '編輯模板',
  SAVE_TEMPLATE: '保存模板',

  'No Refreshing': '不刷新',

  GRAPH_COLORS: '圖表配色',
  SINGLE_GRAPH_TYPE: '最常見的圖表類型',
  SINGLE_GRAPH_TYPE_NAME: '基礎圖',
  STACKED_GRAPH_TYPE: '堆疊圖',
  STACKED_GRAPH_TYPE_DESC: '適用於各大類總量及分量之間的對比顯示',
  CHART_TYPES: '圖表類型',
  GRAPH_TYPES: '圖例類型',
  ADD_MONITOR_ITEM: '添加監控項',
  ADD_MONITOR_ROW: '添加監控組',
  MONITOR_TYPE_NO_SUPPORT: '目前不支持該類型',
  TABLE_SETTINGS: '表格設置',
  PER_PAGE_LINES: '每頁行數',
  CUSTOM_DISPLAY_STYLE: '設置顯示格式',
  CUSTOM_DISPLAY_MODAL_DESC: '根據需要定制Table中的顯示格式',
  DATA_TYPE: '數據類型',
  DECIMALS: '精確位',
  THRESHOLD_FILL: '臨界值填充',
  THRESHOLD_FILL_DESC: '可以設置臨界值，數值超出後可以自動更改樣式提示',
  HIGHT_RULES: '高亮規則',
  TIME_FORMAT: '時間格式',
  MONITOR_METRIC: '監控指標',
  DEBUGB_DATA: '除錯數據',
  LINE_CHART: '折線圖',
  BAR_CHART: '柱狀圖',
  SINGLE_STATE_CHART: '即時文本',
  APPLICABLE_SCENE: '適用場景',
  BASE_LINE_CHART: '基礎折線圖',
  STACK_LINE_CHART: '堆疊面積圖',
  BASE_BAR_CHART: '基礎柱狀圖',
  STACK_BAR_CHART: '堆疊柱狀圖',

  LINE_CHART_DESC: '折線圖主要用來展示數據隨著時間推移的趨勢或變化。',
  BASE_LINE_CHART_DESC:
    '折線圖主要用來展示數據相隨著時間推移的趨勢或變化。折線圖非常適合用於展示一個連續的二維數據，如某網站訪問人數或商品銷量價格的波動。',
  STACK_LINE_CHART_DESC:
    '堆積面積圖是一種特殊的面積圖，可以用來比較在一個區間内的多個變量。如果有多個數據系列，並想分析每個類别的部分到整體的關係，並展現部分量對於總量的貢獻時，使用堆積面積圖是非常合適的選擇。',
  BAR_CHART_DESC:
    '柱狀圖是最常見的圖表類型，通過使用水平或垂直方向柱子的高度來顯示不同類别的數值。',
  BASE_BAR_CHART_DESC:
    '基礎柱狀圖的一個軸顯示正在比較的類别，而另一個軸代表對應的刻度值。',
  STACK_BAR_CHART_DESC:
    '堆疊柱狀圖是柱狀圖的擴展，不同的是，柱狀圖的數據值為並行排列，堆疊柱圖則是一個個疊加起來的。它可以展示每一個分類的總量，以及該分類包含的每個小分類的大小及占比，因此非常適合處理部分與整體的關係。',
  SELECT_CHART_TYPE: '選擇圖表類型',
  SELECT_CHART_TYPE_MODAL_DESC: '選擇您要添加的自定義圖表類型',
  DISPLAY_POSITION: '圖表布局位置',
  DISPLAY_FORMAT: '顯示格式',
  FIELD_NAME: '字段名稱',
  COLUMN_NAME: '列名稱',
  METRIC_NAME: '圖例名稱',
  GRAPH_NAME: '圖表名稱',
  TABLE: '表格',
  VALUE_FOMATER: '數據取值',
  Y_AXIS: 'Y軸',
  'Custom Monitoring': '自定義監控',
  CustomMonitorDashboards: '自定義監控面板',
  CustomMonitorDashboard: '自定義監控面板',
  CUSTOM_MONITORING: '自定義監控',
  CUSTOM_MONITORING_DASHBOARD_DESC:
    'Custom monitoring provides application monitoring templates. You can customize monitoring dashboards based on your needs.',
  CUSTOMMONITORDASHBOARD_CREATE_DESC:
    'You can customize application monitoring dashboards based on your needs.',

  'Default Color': '預設配色',
  'Cool Color': '冷色調',
  'Warm Color': '暖色調',

  EMPTY_CHART_PLACEHOLDER: '圖表將顯示在此區域',

  // Cluster Status
  DISK_USAGE: 'Disk Usage',
  DISK_USAGE_SCAP: 'Disk usage',
  POD_COUNT: 'Pods',
  POD_COUNT_VALUE: 'Pods: {value}',
  API_SERVER: 'API Server',
  AVERAGE_CPU_LOAD: 'Average CPU Load',
  POD_USAGE: 'Pod Usage',
  DISK_THROUGHPUT: 'Disk Throughput',
  NETWORK_BANDWIDTH: 'Network Bandwidth',
  POD_STATUS: 'Pod Status',
  NO_MONITORING_DATA: 'No Monitoring Data',
  NOT_ENABLED: 'Not enabled',
  COMPLETED: 'Completed',
  WARNING: 'Warning',
  REST_CREATE: 'CREATE',
  REST_DELETE: 'DELETE',
  REST_DELETECOLLECTION: 'DELETECOLLECTION',
  REST_GET: 'GET',
  REST_POST: 'POST',
  REST_PATCH: 'PATCH',
  REST_PUT: 'PUT',
  REST_UPDATE: 'UPDATE',
  REST_LIST: 'LIST',
  COUNT: 'Count',
  NODE_IP_ADDRESS_VALUE: 'Node IP Address: {value}',
  NODE_IP_ADDRESS: 'Node IP Address',

  // Application Resources
  WORKSPACES: 'Workspaces',
  ACCOUNTS: 'Accounts',
  PROJECT_PL: 'Projects',
  PROJECT_LOW: 'project',
  DEVOPS_PROJECT_TCAP: 'DevOps project',
  DEVOPS_PROJECT_PL: 'DevOps Projects',
  DEVOPS_PROJECT_TCAP_PL: 'DevOps projects',
  DEVOPS_PROJECT_LOW: 'DevOps project',
  DEVOPS_PROJECT_LOW_PL: 'DevOps projects',
  PROJECTS: 'Projects',
  DEVOPS_PROJECTS: 'DevOps Projects',
  SERVICES: 'Services',
  ROUTES: 'Routes',
  LAST_TIME: 'Last {value}',
  TIME_RANGE_LAST: 'Time range: last {value}',
  TIME_RANGE_RANGE: 'Time range: {startTime} - {endTime}',

  // Custom Monitoring
  CUSTOM_MONITOR_DASHBOARD: 'Custom Monitoring Dashboard',
  CUSTOM_MONITOR_DASHBOARD_CREATE_DESC:
    'You can customize application monitoring dashboards based on your needs.',
  UPLOAD_FROM_LOCAL_STORAGE: 'Upload from Local Storage',
  UPLOAD_FROM_URL: 'Upload from URL',
}
