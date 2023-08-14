// Function to calculate the intersection point of two lines
function calculateIntersection(line1, line2) {

//slope formula                                                                                                                                                                                                                                                                                                                      
    const slope1 = (line1.y2 - line1.y1) / (line1.x2 - line1.x1);
    const slope2 = (line2.y2 - line2.y1) / (line2.x2 - line2.x1);
//intersection of each point formula
    const xIntersection = (line2.y1 - line1.y1 + slope1 * line1.x1 - slope2 * line2.x1) / (slope1 - slope2);
    const yIntersection = slope1 * (xIntersection - line1.x1) + line1.y1;
  
    return { x: xIntersection, y: yIntersection };
  }
  
  // Get user input for endpoints of the two lines
  const line1 = {
    x1: parseFloat(prompt('Enter x1 for Line 1:')),
    y1: parseFloat(prompt('Enter y1 for Line 1:')),
    x2: parseFloat(prompt('Enter x2 for Line 1:')),
    y2: parseFloat(prompt('Enter y2 for Line 1:'))
  };
  
  const line2 = {
    x1: parseFloat(prompt('Enter x1 for Line 2:')),
    y1: parseFloat(prompt('Enter y1 for Line 2:')),
    x2: parseFloat(prompt('Enter x2 for Line 2:')),
    y2: parseFloat(prompt('Enter y2 for Line 2:'))
  };
  
  // Calculate the intersection point
  const intersection = calculateIntersection(line1, line2);
  
  // Print the intersection point
  console.log('Intersection point:', intersection);
  