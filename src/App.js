import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers=[
  {
    'id': 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '장주찬',
    'birthday' : '980318',
    'gender' : '남자',
    'job' : '커플'
  },
  {
    'id': 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '박성수',
    'birthday' : '980209',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id': 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '양혁진',
    'birthday' : '280809',
    'gender' : '남자',
    'job' : '할아버지'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />);
          })
        }
      </div>

    );
  }
}

export default App;
