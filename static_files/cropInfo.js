var strawberry = document.createElement('div')
strawberry.innerHTML = `<p> * Strawberry plants require 6-10 hours a day of direct sunlight, so choose  
<br>&nbsp;&nbsp;&nbsp;your planting site accordingly.   
<br> * Strawberries are tolerant of different soil types, although they prefer loam. 
<br>&nbsp;&nbsp;&nbsp;Ideally, begin working in aged manure or compost a couple months before planting. 
<br> * Soil pH should be between 5.5 and 7. If necessary, amend your soil in advance of 
<br>&nbsp;&nbsp;&nbsp;planting.
<br> * The planting site must be well-drained. Raised beds are a particularly good option
<br>&nbsp;&nbsp;&nbsp;for strawberry plants.
<br> * Practice crop rotation for the most success. Do not plant in a site that recently 
<br>&nbsp;&nbsp;&nbsp;had strawberries, tomatoes, peppers, or eggplant.
<br> * Strawberries are sprawling plants. Seedlings will send out runners, or ‘daughter’ 
<br>&nbsp;&nbsp;&nbsp;plants, which in turn will send out their own runners.
<br> * Make planting holes deep and wide enough to accommodate the entire root system 
<br>&nbsp;&nbsp;&nbsp;without bending it. 
<br> * However, don’t plant too deep: The roots should be covered, but the crown should 
<br>&nbsp;&nbsp;&nbsp;be right at the soil surface.
</p>`;

var watermelon = document.createElement('div')
watermelon.innerHTML = `<p> * If you live in warmer climes, you can sow seeds directly outdoors, but wait until the soil 
<br>&nbsp;&nbsp;&nbsp;temperature warms to at least 70°F to avoid poor germination.
<br> * Watermelon vines are very tender and should not be transplanted until all danger of frost 
<br>&nbsp;&nbsp;&nbsp;has passed. (To be safe, wait at least two weeks past your last frost date.)
<br> * If you are in a cooler zone, start seeds indoors about a month before transplanting. 
<br> * Amend soil with aged manure, seaweed, and/or compost before planting. Watermelons are heavy 
<br>&nbsp;&nbsp;&nbsp;feeders. Learn more about soil amendments and preparing soil for planting.
<br> * Watermelons prefer a soil pH between 6 and 6.8.
<br> * Growing the vines in raised rows, known as hills, ensures good drainage and will hold the 
<br>&nbsp;&nbsp;&nbsp;sun’s heat longer. Space the plants about 2 feet apart in a 5-foot-wide hill. 
<br> * If you’re growing in rows, space 6 feet by 6 feet apart. 
<br> * Watermelons like loamy, well-drained soil. Handle them gently when you transplant. 
<br> * After you transplant, cover the plants with row covers to keep pests at bay. You’ll remove the row 
<br>&nbsp;&nbsp;&nbsp;covers when you see both male and female flowers on the vine.
</p>`;

var pineapple = document.createElement('div')
pineapple.innerHTML = `<p> * <b>Plant Location:</b> Your pineapple needs bright light or full sun for most of the day. It can 
<br>&nbsp;&nbsp;&nbsp;handle a little bit of shade as long as there’s plenty of light. Keep the plant away from 
<br>&nbsp;&nbsp;&nbsp;freezing temperatures. The large pineapple plant in the photos spends the winter in an unheated
<br>&nbsp;&nbsp;&nbsp;North Carolina basement, in a warm sunny nook created by a large south-facing window.
<br> * <b>Water and Fertilizer:</b> Overwatering and overfeeding are the two best ways to kill a pineapple 
<br>&nbsp;&nbsp;&nbsp;plant. Water only as needed, and feed the plant about once a month with a balanced organic 
<br>&nbsp;&nbsp;&nbsp;fertilizer at no more than regular strength. Keep your pineapple plant lightly moist, and 
<br>&nbsp;&nbsp;&nbsp;never let it become waterlogged or bone dry.
<br> * <b>Pineapple Growing Season:</b> Your pineapple plant will do most of its growing during the warm 
<br>&nbsp;&nbsp;&nbsp;seasons and will slow down when the days get short.
<br> * <b>Pineapple Blooming:</b> Like other bromeliads, it can be very difficult to get a pineapple to 
<br>&nbsp;&nbsp;&nbsp;bloom, and it’s not likely to bloom or produce fruit for 2-3 years. If it doesn’t bloom on its
<br>&nbsp;&nbsp;&nbsp;own, one popular way to induce blooming is to expose the pineapple plant to ethylene gas by 
<br>&nbsp;&nbsp;&nbsp;enclosing your pineapple plant in plastic with a few overripe apples for a few weeks during 
<br>&nbsp;&nbsp;&nbsp;the winter. As the apples decompose, they release ethylene which stimulates flowering.
<br> * <b>Harvesting Pineapples:</b> Once your pineapple plant flowers, it takes several months to grow 
<br>&nbsp;&nbsp;&nbsp;fruit. Smaller plants will produce smaller pineapples, but they’re just as yummy! Pick the 
<br>&nbsp;&nbsp;&nbsp;pineapples when they are evenly ripe and golden yellow.
<br> * <b>Growing More Pineapples:</b> All of those new pineapples can be rooted to make more plants. When 
<br>&nbsp;&nbsp;&nbsp;you harvest your pineapples, look at the base of the fruit for small baby shoots. Harvest your 
<br>&nbsp;&nbsp;&nbsp;pineapple carefully, leaving these shoots to grow a little. They can then be gently removed and 
<br>&nbsp;&nbsp;&nbsp;planted in their own pots.
</p>`;

var orange = document.createElement('div')
orange.innerHTML = `<p> * Citrus trees should be planted in a sunny and wind-protected area.
<br> * In the citrus belt (a loosely defined area stretching from southern California to Florida), 
<br>&nbsp;&nbsp;&nbsp;trees can be planted at any time, however, spring is the best time for container-grown plants.
<br> * Standard-size citrus trees should be spaced 12 to 25 feet apart and dwarf citrus trees should 
<br>&nbsp;&nbsp;&nbsp;be set 6 to 10 feet apart. The exact distance depends on the variety. The bigger the fruit, the 
<br>&nbsp;&nbsp;&nbsp;farther the distance.
<br> * If the soil is not well-drained, plant the trees on a slight mound to prevent waterlogging.
<br> * To plant citrus trees inside from seeds, remove the seeds from the desired fruit. Soak the 
<br>&nbsp;&nbsp;&nbsp;seeds overnight in water and plant them ½ inch deep in moist potting soil. Cover the pot with a 
<br>&nbsp;&nbsp;&nbsp;plastic bag or wrap and let it sit in a warm and sunny spot for a few weeks until the seeds 
<br>&nbsp;&nbsp;&nbsp;start to grow. Then, remove the plastic but keep the pot near a warm and sunny window.
</p>`;

const url = new URL(window.location)
const params = new URLSearchParams(url.search)

$(function() {
  const crop = params.get("cropID")
  var facts = document.getElementById('crop-facts')
  var img = document.getElementById('crop-img')
  var name = document.getElementById('crop-name')
  var i = document.createElement('img')
  switch(crop) {
    case "strawberry": 
      facts.appendChild(strawberry); 
      i.src = 'fruits/strawberry.jpg'
      name.innerHTML = "Strawberry"
      img.appendChild(i)
      break;
    case "pineapple": 
      facts.appendChild(pineapple); 
      break;
    case "watermelon": 
      facts.appendChild(watermelon); 
      break;
    case "orange": 
      facts.appendChild(orange); 
      break;
  }
})



/**
 * Available fields
 * fieldId: cotton-field-1, name=null
 * fieldId: sunflower1, name="sunflower-elco"
 */