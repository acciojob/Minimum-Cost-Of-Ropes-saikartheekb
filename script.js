function calculateMinCost() {
  //your code here
	let input = document.querySelector("input").value;
	let array = input.split(",");
	for(let i = 0; i < array.length; i++){
		array[i] = +array[i];
	}
	
	let result = document.querySelector("#result");
	result.innerHTML =  minCostCalc(array);

	function minCostCalc(arr) {
	  let heap = arr;
	  heap.sort((a, b) => a - b); // sort the ropes in increasing order
	  let cost = 0;
	  while (heap.length > 1) {
	    let rope1 = heap.shift(); // remove the shortest rope from the heap
	    let rope2 = heap.shift(); // remove the second shortest rope from the heap
	    let connectedRope = rope1 + rope2; // connect the ropes
	    cost += connectedRope; // add the cost of connecting the ropes to the total cost
	    heap.push(connectedRope); // add the connected rope back to the heap
	    heap.sort((a, b) => a - b); // re-sort the heap
	  }
	  return cost;
	}
}