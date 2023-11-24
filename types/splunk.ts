export interface SplunkNotification {
  _index: string
  event_title: string
  tenant_uid: string
  impact: string
  urgency: string
  priority: 'informational' | 'low' | 'medium' | 'high' | 'critical'
  assignee: string
  search_name: string
  originQuery: any
  count: number
  status: 'new' | 'assigned' | 'resolved' | 'closed' | 'suppressed' | 'in_progress'
  notifications: string
  tags: string[]
  notable_fields: any[]
  first_seen: number
  most_recent: number
  event_ttl: number
  alert_keys: string[]
  template_name: string
  _user: string
  _key: string
  status_changed: boolean
}
