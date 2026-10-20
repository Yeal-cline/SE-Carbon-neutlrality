# StarUML 图文件

本目录保存实验一的可编辑 StarUML 原生工程文件。使用 StarUML 打开 `.mdj` 文件即可查看和修改模型。

推荐直接打开 [lab1-all-models.mdj](lab1-all-models.mdj)。该工程在同一个 Model Explorer 中包含全部 9 张图：

- 5 张模块用例图
- 3 张关键活动图
- 1 张领域类图

| 文件 | 图类型 | 检查结果 |
| --- | --- | --- |
| `lab1-all-models.mdj` | 综合工程 | 9 张图合并在一个项目中 |
| `account-use-cases.mdj` | 用例图 | 2 个角色、4 个用例、5 条关系、12 个视图 |
| `trip-use-cases.mdj` | 用例图 | 1 个角色、3 个用例、4 条关系、9 个视图 |
| `points-use-cases.mdj` | 用例图 | 2 个角色、3 个用例、3 条关系、9 个视图 |
| `mall-use-cases.mdj` | 用例图 | 3 个角色、5 个用例、8 条关系、17 个视图 |
| `operations-use-cases.mdj` | 用例图 | 1 个角色、2 个用例、2 条关系、6 个视图 |
| `trip-point-issuance-activity.mdj` | 活动图 | 17 个节点、34 个视图 |
| `redemption-activity.mdj` | 活动图 | 14 个节点、31 个视图 |
| `rule-change-activity.mdj` | 活动图 | 10 个节点、20 个视图 |
| `domain-model.mdj` | 类图 | 8 个类、55 个属性、1 个操作、9 条关系 |

## 导出建议

1. 使用 StarUML 打开对应 `.mdj` 文件。
2. 检查自动布局后的连线、标签和系统边界是否可见。
3. 通过 `File → Export As → PNG` 导出报告图片，建议宽度不低于 1600 像素。
4. 导出后将图片放入实验报告的模型章节，并保留 `.mdj` 作为可编辑源文件。

## 生成说明

图文件由 MIT 许可的 `staruml-mcp-server` 生成，并使用其结构检查器验证。生成结果包含真实的 StarUML 模型元素、视图和引用，不是静态截图。
