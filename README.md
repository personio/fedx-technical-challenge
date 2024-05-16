# Personio FEDX Technical Challenge

This is simulating a "Frontend Release Manager" for the Frontend Developer Experience technical challenge.

It is the product of a fake hackathon project which has been selected as the team's next project.

Prior to your interview with Personio, you will be sent a document with the instructions and expectations for the challenge. Below is the README that comes with the repo for the technical challenge.

---

# Frontend Release Manager Hackathon Project

This is a frontend and backend which allows Personios to manage frontend releases

## Status definitions

- `active` - this release is being served to our customers!
- `inactive` - the entry has been created in our CI pipeline but has not yet been released
- `unstable` - a problem was found with the release, so it was "rolled back" manually and made unstable

## Schema

```ts
interface Schema {
  frontendName: string;
  releaseId: string;
  status: 'active' | 'inactive' | 'unstable';
  releaseDate?: string;
  createdAt: string;
  assets: string[];
}
```

## Set up

- Install the correct node and pnpm versions
  - nodejs 20
  - pnpm >= 7 and < 8
- Install using `pnpm i`
- Start the frontend with `pnpm dev`

## DB

You can start up the local dev database by the following:

- `docker-compose up -d`
- `cd database`
- `pnpm migrate`
- `pnpm seed`

## Backend

TBC
