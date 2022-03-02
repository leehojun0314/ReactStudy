module.exports = function ({ types: t }) {
	return {
		visitor: {
			ExpressionStatement(path) {
				//ExpressionStatement 노드가 생성되면 호출되도록 메서드를 등록한다.
				if (t.isCallExpression(path.node.expression)) {
					//ExpressionStatement 노드의 expression속성이 CallExpression노드인지 검사한다
					if (t.isMemberExpression(path.node.expression.callee)) {
						//callee 속성이 MemberExpression 속성인지 검사한다.
						const memberExp = path.node.expression.callee;
						if (
							memberExp.object.name === "console" &&
							memberExp.property.name === "log"
						) {
							//console 객체의 log 메서드가 호출된 것인지 검사한다.
							path.remove();
							//모든 조건을 만족하면 AST에서 ExpressionStatement 노드를 제거한다
						}
					}
				}
			},
		},
	};
};
