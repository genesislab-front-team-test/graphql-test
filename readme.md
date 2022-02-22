localhost:4000 로 접속 시 graphiql 로 연결.
graphql 직접 테스트 할 수 있음.

접속 후 하단의 QUERY VARIABLES 탭을 위로 올리면 variables 를 입력할 수 있어 mutation 호출 가능.

- 참고 링크 (https://hwasurr.io/api/graphql-example/)

```sql
# mutation 호출 시
mutation addcustomer($name: String!, $email:String!, $age:Int!){
  addCustomer(name: $name, email: $email, age: $age){
    id,name,email,age
  }
}

```

```sql
# query 호출 시
{
    customers {
      id
      name
      email
      age
    }
}
```

```json
# QUERY VARIABLES
{
  "name": "TEST",
  "age": 32,
  "email": "ee@dd.com"
}
```
