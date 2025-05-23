// sample-datasets.js

export const paymentsData = [
    { id: 1, date: '3/10/24', property: "Kabanga 3", type: "Cash", status: "Done", amount: "1000", 'paid by': "Patience Phiri" , period:'Jan-Feb'},
    { id: 2, date: '30/09/24', property: "Memaco 5", type: "Bank", status: "Done", amount: "1000", 'paid by': "Phillis Mwandwe" , period:'Nov'},
    
  ]
  
  export const tenantsData = [
    { id: 3, header: "John Doe", type: "Tenant", status: "Active", target: "12 mo", limit: "15 mo", reviewer: "Jamik Tashpulatov" },
    { id: 4, header: "Jane Smith", type: "Tenant", status: "Done", target: "6 mo", limit: "6 mo", reviewer: "Assign reviewer" },
  ]
  
  export const propertiesData = [
    { id: 5, header: "Sunset Villa", type: "Property", status: "Available", target: "5 tenants", limit: "5 tenants", reviewer: "Eddie Lake" },
    { id: 6, header: "Hilltop View", type: "Property", status: "Done", target: "3 tenants", limit: "3 tenants", reviewer: "Assign reviewer" },
  ]
  
  export const invoicesData = [
    { id: 7, header: "Invoice #101", type: "Invoice", status: "Done", target: "$1200", limit: "$1200", reviewer: "Emily Whalen" },
    { id: 8, header: "Invoice #102", type: "Invoice", status: "Not Started", target: "$800", limit: "$850", reviewer: "Assign reviewer" },
  ]
  