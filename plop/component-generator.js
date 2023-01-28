export default function (plop) {
  plop.setGenerator("component", {
    description: "Gerador de Componentes React",
    prompts: [
      {
        type: "rawlist",
        name: "language",
        message: "Typescript ou Javascript?",
        choices: ["Typescript", "Javascript"],
        filter(val) {
          return val == "Typescript" ? "ts" : "js"
        },
      },
      {
        type: "input",
        name: "name",
        message: "Nome do Componente",
      },
    ],
    actions: function (data) {
      const actions = []

      actions.push({
        type: "add",
        path: `./src/components/{{name}}/index.{{language}}x`,
        templateFile: "./plop/component-index-template.hbs",
      })
      actions.push({
        type: "add",
        path: `./src/components/{{name}}/{{name}}.{{language}}x`,
        templateFile: "./plop/component-name-template-{{language}}.hbs",
      })
      actions.push({
        type: "add",
        path: `./src/components/{{name}}/{{name}}.styles.{{language}}x`,
        templateFile: "./plop/component-styles-template.hbs",
      })

      if (data.language == "ts") {
        actions.push({
          type: "add",
          path: `./src/components/{{name}}/{{name}}.types.{{language}}x`,
          templateFile: "./plop/component-types-template.hbs",
        })
      }

      return actions
    },
  })
}
