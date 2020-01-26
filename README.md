# MooviesDB More Like This

> Component that renders titles with descriptions related to the main movie the page is dedicated to.  
 
## Related Projects

  - https://github.com/hrr41-fec-frieza/mooviesdb-user-reviews
  - https://github.com/hrr41-fec-frieza/top-video-player
  - https://github.com/hrr41-fec-frieza/mooviesdb-photo-carousel
  
## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Server runs on localhost:3030

> To view relevant movies for different pages:
  http://localhost:3030/?id={ Any number 100-199 }

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

### Setting Up Environment

1. From within the root directory:

```sh
npm install -g webpack
npm install
```

2. Seed database:
```sh
npm run seed-db
```

3. Build bundle with webpack:
```sh
npm run build
```

4. Start server on localhost:3030 :
```sh
npm start
```

