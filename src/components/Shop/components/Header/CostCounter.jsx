import React from "react";

const CostCounter = ({ totalPrice }) => (
		<h2 className="heading_summary heading d-flex align-items-center">
			Total cost is: {totalPrice} $
		</h2>
)

export default CostCounter;