import './App.css';

import { Input } from './input';
import { Card } from './Card';

function App() {
  const citiesList = ['Moscow', 'New York', 'London'];
  return (
    <div className="Main">
      <Input />
      <div className='CardList'>
        {
          citiesList.map((city) => (
            <Card key={city} city={city} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
