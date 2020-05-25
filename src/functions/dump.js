import React from "react";

const dump = variable => <div className="bg-info text-dark">
  <pre>{JSON.stringify(variable, null, 2)}</pre>
</div>

export default dump
