# Contributing

The project is powered by NextJS 12.

## Setting up

1. Clone the repo
2. Install the dependencies

```
    npm i
```

3. Run the project locally

```
    npm run dev
```

## Workflow

1. Create a issue
2. Create a new branch from `develop` branch
3. Start development
4. Once done, bump up version number in `config/constants.ts` based on (SemVer2.0)[https://semver.org/]
5. Create a Pull request to merge into `develop` branch
6. Wait for review and approval

## Git commit message format

Writing a thoughtful commit message is important as it makes it easier for developers to troubleshoot problems :-)

```
// Format
[<type>]: <action/verb> <description>

// Example
[docs] add documentation
```

### Git commit types

-   fix (bug fix)
-   feat (feature change)
-   refactor (refactoring of codes)
-   docs (release notes, readme etc.)
-   style (sass, styling etc.)
-   chore (all other types of changes)
