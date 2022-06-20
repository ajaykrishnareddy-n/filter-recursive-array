const routes = [
  {
    route: {
      element: "dashboard",
      path: "dashboard"
    },
    label: "Dashboard"
  },
  {
    label: "Collections",
    route: {
      path: "collections",
      element: "collections",
      deleteElement: true,
      children: [
        {
          index: true,
          element: "collections"
        },
        {
          path: "doc/:collection",
          element: "collection-document",
          children: [
            {
              index: true,
              element: "collection-document-data"
            },
            {
              path: "indexes",
              element: "collection-indexes"
            },
            {
              path: "stream",
              element: "collection-streams"
            },
            {
              path: "settings",
              element: "collection-settings"
            }
          ]
        },
        {
          path: "doc/:collection/:document",
          element: "document-view"
        },
        {
          path: "kv/:collection",
          element: "KV-collection-view",
          children: [
            {
              index: true,
              element: "KV-collection-data"
            },
            {
              path: "indexes",
              element: "collection-indexes"
            },
            {
              path: "stream",
              element: "collection-streams"
            },
            {
              path: "settings",
              element: "collection-settings"
            }
          ]
        },
        {
          path: "dynamo/:collection",
          element: "dynamo-view",
          children: [
            {
              index: true,
              element: "dynamo-data"
            },
            {
              path: "indexes",
              element: "dynamo-indexes"
            },
            {
              path: "settings",
              element: "dynamo-settings"
            }
          ]
        }
      ]
    }
  },
  {
    label: "Graphs",
    route: {
      path: "graphs",
      element: "graphs",
      deleteElement: true,
      children: [
        {
          index: true,
          element: "graphs"
        },
        {
          path: ":graphName",
          element: "graph-view"
        }
      ]
    }
  },
  {
    hasSeparator: true,
    label: "Search Views",
    route: {
      element: "search",
      path: "search"
    }
  },
  {
    label: "Query Workers",
    hasSeparator: true,
    route: {
      path: "query-workers",
      element: "query-workers",
      children: [
        {
          index: true,
          element: "query-editor"
        },
        {
          path: "saved-query-workers",
          element: "saved-query-workers"
        },
        {
          path: "running-queries",
          element: "running-queries"
        },
        {
          path: "slow-queries-history",
          element: "slow-queries-history"
        }
      ]
    }
  },
  {
    label: "Streams",
    route: {
      path: "streams",
      deleteElement: true,
      element: "streams",
      children: [
        {
          index: true,
          element: "streams"
        },
        {
          path: ":streamName",
          element: "stream-details"
        }
      ]
    }
  },
  {
    label: "Stream Workers",
    hasSeparator: true,
    route: {
      path: "stream-workers",
      element: "stream-workers",
      children: [
        {
          index: true,
          element: "stream-worker-editor"
        },
        {
          path: "samples",
          element: "stream-worker-samples"
        },
        {
          path: "logs",
          element: "stream-worker-logs"
        },
        {
          path: "saved-stream-workers",
          element: "saved-stream-workers"
        }
      ]
    }
  },
  {
    label: "Geo Fabrics",
    route: {
      path: "geo-fabrics",
      element: "geo-fabrics",
      deleteElement: true,
      children: [
        {
          index: true,
          element: "geo-fabrics"
        },
        {
          path: ":fabricName",
          element: "fabric-details"
        }
      ]
    }
  },
  {
    label: "Locations",
    hasSeparator: true,
    route: {
      element: "locations",
      path: "locations"
    }
  },
  {
    label: "Tenants",
    route: {
      path: "tenants",
      element: "tenants",
      deleteElement: true,
      children: [
        {
          index: true,
          element: "tenants"
        },
        {
          path: "list",
          element: "tenants",
          children: [
            {
              index: true,
              element: "tenant-table"
            }
          ]
        },
        {
          path: "limits",
          element: "tenants",
          children: [
            {
              index: true,
              element: "platform-limits"
            }
          ]
        },
        {
          path: ":tenantName",
          element: "tenant-details"
        }
      ]
    }
  },
  {
    label: "Account",
    hasSeparator: true,
    route: {
      path: "accounts",
      element: "account",
      deleteElement: true,
      children: [
        {
          index: true,
          element: "account"
        },
        {
          path: "overview",
          element: "account",
          children: [
            {
              index: true,
              element: "account-overView"
            }
          ]
        },
        {
          path: "users",
          element: "account",
          children: [
            {
              index: true,
              element: "users"
            }
          ]
        },
        {
          path: "apikeys",
          element: "account",
          children: [
            {
              index: true,
              element: "api-keys"
            }
          ]
        },
        {
          path: "plans",
          element: "account",
          children: [
            {
              index: true,
              element: "Plans"
            }
          ]
        },
        {
          path: "users/:user",
          element: "user-details",
          children: [
            {
              index: true,
              element: "general"
            },
            {
              path: "attributes",
              element: "attributes"
            },
            {
              path: "permissions",
              element: "user-api-key-permission"
            }
          ]
        },
        {
          path: "apikeys/:apikey",
          element: "api-key-details",
          children: [
            {
              index: true,
              element: "user-api-key-permission"
            },
            {
              path: "attributes",
              element: "attributes"
            }
          ]
        }
      ]
    }
  },
  {
    label: "API Reference",
    route: {
      path: "api",
      element: "api",
      children: [
        {
          index: true,
          element: "external-reference",
          tabKey: "external"
        },
        {
          path: "internal",
          element: "admin-reference",
          tabKey: "internal"
        }
      ]
    }
  },
  {
    label: "Documentation",
    externalLink: "https://macrometa.com/docs/quickstart/",
    route: {
      path: "documentation",
      element: "documentation"
    }
  },
  {
    label: "Support",
    externalLink: "https://support.macrometa.com/",
    route: {
      path: "support",
      element: "support"
    }
  }
];

// const excludes = ["collection-document", "collection-indexes","dashboard"];
const excludes = [
  "dashboard",
  "collection-document",
  "document-view",
  "KV-collection-data",
  "dynamo-indexes",
  "dynamo-settings",
  "admin-reference"
];

function recursiveRemove(newRoutes) {
  return newRoutes
    .map((item) => {
      return { ...item };
    })
    .filter((item) => {
      if (item.children) {
        item.children = recursiveRemove(item.children);
      }

      if (item.element) {
        return !excludes.includes(item.element);
      }

      if (item.route.children) {
        item.route.children = recursiveRemove(item.route.children);
      }

      if (item.route?.element) {
        return !excludes.includes(item.route.element);
      }

      return item;
    });
}
// recursiveRemove(routes);
console.log(recursiveRemove(routes));
