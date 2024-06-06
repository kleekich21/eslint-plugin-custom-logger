module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "console.log 대신 커스텀 logger를 사용하는 것을 권장한다.",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {};
  },
};
