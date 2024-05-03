import React from 'react';

function FruitList() {
  // 배열 데이터
  const fruits = ["awf", 'Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div>
      <h1>Fruit List</h1>
      {/* 배열 요소를 매핑하여 리스트 생성 */}
      <ul>
        {fruits.map((fruit, index) => {
          return <li key={fruit.id} > {fruit}</li>
        })}
      </ul>
    </div>
  );
}

export default FruitList;