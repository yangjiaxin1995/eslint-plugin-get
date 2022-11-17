// eslint-plugin
// rule

module.exports = {
  rules: {
    get: {
      meta: { fixable: 'code' },
      create(context) {
        const isFix = context.options[0];
        return {
          FunctionDeclaration(node) {
            const functionName = node.id.name;
            if (!functionName.startsWith('get')) return;
            const blockStatementBody = node.body.body;
            const lastNode = blockStatementBody[blockStatementBody.length - 1];

            if (!lastNode || lastNode.type !== 'ReturnStatement') {
              context.report({
                node,
                message: `${functionName} must return a value`,
                fix(fixer) {
                  if (isFix === false) {
                    return fixer.insertTextAfter(node, '');
                  }
                  const endNode = node.range[1];
                  return fixer.replaceTextRange(
                    [endNode - 1, endNode],
                    "return ''}"
                  );
                },
              });
            }
          },
        };
      },
    },
  },
};
