function getCatalog() {
  return {
    services: [{
      id: "05c03385-1f7f-48f6-ae39-d131a517da33",
      name: "numbers",
      description: "Get a phone number!",
      bindable: true,
      plans: [{
        id: "b178182f-4f87-47af-9a0a-7b036080792e",
        name: "default",
        description: "The default plan: get 1 number",
        free: false
      }]
    }]
  }
}

module.exports = getCatalog;
