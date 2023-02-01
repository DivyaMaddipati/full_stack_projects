import {Card1,Card2} from './Cards'
import { faker } from '@faker-js/faker'
function App() {
  return (
    <>
    {/* <div>
      <Card1
      img = {faker.image.avatar()}/>
      <Card2
      img = {faker.image.avatar()}/>
    </div> */}
     <div class="ui two column centered grid">
  <div class="column"></div> 
  <div class="ui four column centered row">
    <div class="column">
    <Card1
      img = {faker.image.avatar()}/>
    </div>
    <div class="column">
    <Card2
      img = {faker.image.avatar()}/>
    </div>
  </div>
 </div> 
    </>
  );
}

export default App;
