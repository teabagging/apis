---
title: Migrating from Kong
toc: true
---

Run `kong migrations` commands to migrate from a {{site.ce_product_name}} installation to {{site.ee_product_name}}.

You can only migrate to a {{site.ee_product_name}} version that
supports the same {{site.ce_product_name}} version.

## Prerequisites

{:.warning}
> **Warning:** This action is irreversible, therefore it is strongly
   recommended to back up your production data before migrating from
   {{site.ce_product_name}} to {{site.ee_product_name}}.

If running a version of {{site.ce_product_name}} earlier than {{page.release}},
[upgrade to {{site.ce_product_name}} {{page.release}}](/gateway/{{page.release}}/upgrade/) before migrating
{{site.ce_product_name}} to {{site.ee_product_name}} {{page.release}}.

## Migration steps

The following steps guide you through the migration process.

1. [Download](/gateway/{{page.release}}/install/) the {{site.ee_product_name}}
{{page.release}} package and configure it to point to the same data store as your
{{site.ce_product_name}} node. The migration command expects the data store
to be up to date on any pending migration:

   ```shell
   kong migrations up [-c configuration_file]
   kong migrations finish [-c configuration_file]
   ```

2. Confirm that all of the entities are now available on your
   {{site.ee_product_name}} node.
