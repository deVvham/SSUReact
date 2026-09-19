let food = ["짜장면", "피자", "치킨"];  //배열 생성
console.log(food[0]); //짜장면 접근(배열 데이터 읽기)
console.log(food[1]); //피자 접근
console.log(food[2]); //치킨 접근
food[2] = "파스타";  //수정
food[food.length] = "레몬"; //끝에 추가, food.push("레몬")과 동일
food.splice(1, 0, "양파") //1인덱스에 양파 삽입(중간에 삽입)
console.log(food); //배열 전체 접근" ["짜장면", "양파", "피자", " 파스타", "레몬"]
food.splice(1, 1); //1번 인덱스 삭제
food.splice(food.indexOf('파스타'), 1) //"파스타 삭제"
console.log(food);//["짜장면", "피자", "레몬"]