# Create github issues javascript action

This action will create an issue in all repositories that are part of the input 'repositories'.

## Inputs

## `github-token`

**Required** The github token to use for creating issues.

## `repositories`

**Required** List of repositories to create issues.

## `title`

**Required** The title of issue. Default `"API changes"`.

## `body`

**Required** The body of issue to be created.

## `labels`

**Not Required** The labels of the issue.

## Outputs

## `are-issues-created`

If the issues are created.

## Example usage
TBD