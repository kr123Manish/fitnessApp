
## API Reference
Due to security resons password removed from server.js file for testing please use this URL: https://fitness-app-vercel-git-main-kr123manish.vercel.app/
#### CREATE Fitness Program

```
  POST https://fitness-app-vercel-git-main-kr123manish.vercel.app/fitnessProgrames/addfitnessProgrames
```

| Name | URL |
| :-------- | :------- |
| `Create` | `POST /fitnessProgrames/addfitnessProgrames` |

- Input 
```
{   
    "ProgramName": "HIIT (High-Intensity Interval Training)",
    "Exercises":  ["0746b860-4672-4371-9019-0f9da5887196","ef580b46-a4e9-4a18-89c8-dbe03127b8eb"]
}

```
- Output
```
{
    "ProgramId": "aaaefddb-36c4-450e-9f63-a7569832b362",
    "ProgramName": "CrossFit",
    "Exercises": [
        "0746b860-4672-4371-9019-0f9da5887196"
    ],
    "_id": "64422c14ea5af3e7c84284a0",
    "__v": 0
}
```

#### EDIT Fitness Program

```
  PATCH https://fitness-app-vercel-git-main-kr123manish.vercel.app/fitnessProgrames/updatefitnessProgrames/:ProgramId
```

| Name | URL |
| :-------- | :------- |
| `EDIT` | `PATCH /fitnessProgrames/updatefitnessProgrames/:ProgramId` |

- Input 
```
{
        "Exercises":  ["0746b860-4672-4371-9019-0f9da5887196","ef580b46-a4e9-4a18-89c8-dbe03127b8eb"]
}

```
- Output
```
{
    "_id": "6443ef448bbfc10e81835a7d",
    "ProgramId": "10df6f73-c9f3-43e7-aee1-abfb1ac5c380",
    "ProgramName": "HIIT (High-Intensity Interval Training)",
    "Exercises": [
        "0746b860-4672-4371-9019-0f9da5887196",
        "ef580b46-a4e9-4a18-89c8-dbe03127b8eb"
    ],
    "__v": 0
}
```

#### DELETE fitness program

```
  DELETE https://fitness-app-vercel-git-main-kr123manish.vercel.app/fitnessProgrames/deletefitnessProgrames
```

| Name | URL |
| :-------- | :------- |
| `DELETE` | `DELETE /fitnessProgrames/deletefitnessProgrames` |

- Input 
```
{
    "ProgramId":"2062a856-e4cc-4958-9644-4012192673c9"
}

```
- Output
```
{
    "status": true
}
```

#### GET Fitness Program

```
  GET https://fitness-app-vercel-git-main-kr123manish.vercel.app/fitnessProgrames/getfitnessProgrames
```

| Name | URL |
| :-------- | :------- |
| `GET` | `GET /fitnessProgrames/deletefitnessProgrames` |

- Output
```
[
    {
        "ProgramId": "2062a856-e4cc-4958-9644-4012192673c9",
        "ProgramName": "HIIT (High-Intensity Interval Training) ",
        "Exercises": [
            {
                "_id": "6442270e66494499abb29e06",
                "ExerciseId": "0746b860-4672-4371-9019-0f9da5887196",
                "ExerciseName": "Running ",
                "ExerciseLength": 15,
                "__v": 0
            },
            {
                "_id": "644229118e07d53a5062965b",
                "ExerciseId": "ef580b46-a4e9-4a18-89c8-dbe03127b8eb",
                "ExerciseName": "Swimming",
                "ExerciseLength": 35,
                "__v": 0
            }
        ]
    },
    {
        "ProgramId": "aaaefddb-36c4-450e-9f63-a7569832b362",
        "ProgramName": "CrossFit",
        "Exercises": [
            {
                "_id": "6442270e66494499abb29e06",
                "ExerciseId": "0746b860-4672-4371-9019-0f9da5887196",
                "ExerciseName": "Running ",
                "ExerciseLength": 15,
                "__v": 0
            }
        ]
    }
]
```

#### CREATE Exercises

```
  POST https://fitness-app-vercel-git-main-kr123manish.vercel.app/exercises/addExercise
```

| Name | URL |
| :-------- | :------- |
| `CREATE` | `POST /exercises/addExercise` |

- Input 
```
{
    "ExerciseName":"Swimming",
    "ExerciseLength": 35
}

```
- Output
```
{
    "ExerciseId": "8b3bc2b7-9922-4b7a-9c22-876982227226",
    "ExerciseName": "Swimming",
    "ExerciseLength": 35,
    "_id": "6442273566494499abb29e09",
    "__v": 0
}
```

#### DELETE Exercises

```
  DELETE https://fitness-app-vercel-git-main-kr123manish.vercel.app/exercises/deleteExercise
```

| Name | URL |
| :-------- | :------- |
| `DELETE` | `DELETE /exercises/deleteExercise` |

- Input 
```
{
    "ExerciseId":"8b3bc2b7-9922-4b7a-9c22-876982227226"
}

```
- Output
```
{
    "status": true
}
```

#### GET Exercises

```
  GET https://fitness-app-vercel-git-main-kr123manish.vercel.app/exercises/getExercises
```

| Name | URL |
| :-------- | :------- |
| `GET` | `GET /exercises/getExercises` |


- Output
```
[
    {
        "_id": "6442270e66494499abb29e06",
        "ExerciseId": "0746b860-4672-4371-9019-0f9da5887196",
        "ExerciseName": "Running ",
        "ExerciseLength": 15,
        "__v": 0
    },
    {
        "_id": "644229118e07d53a5062965b",
        "ExerciseId": "ef580b46-a4e9-4a18-89c8-dbe03127b8eb",
        "ExerciseName": "Swimming",
        "ExerciseLength": 35,
        "__v": 0
    }
]
```

