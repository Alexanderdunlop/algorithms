import { assertEquals, assertLessOrEqual } from "@std/assert";
import { binarySearch } from "./binary_search.ts";

Deno.test(function binarySearchTest() {
  let maxComplexity = 0;
  const runTestCount = 100;
  const timeComplexity = Math.floor(Math.log2(runTestCount)) + 1;
  for (let i = 0; i < runTestCount; i++) {
    const { found, timesRun } = binarySearch(i, runTestCount);
    maxComplexity = timesRun > maxComplexity ? timesRun : maxComplexity;
    // check if target is found
    assertEquals(found, true);
    // check time complexity of binary search is O(log n)
    assertLessOrEqual(timesRun, timeComplexity);
  }
  console.log(
    `Max Complexity: ${maxComplexity}, Time Complexity: ${timeComplexity}`
  );
});
