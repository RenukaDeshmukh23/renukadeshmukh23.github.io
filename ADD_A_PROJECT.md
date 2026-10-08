# Add a new project without redesigning the website

## 1. Prepare one Markdown file

Use `project-template.md` or share an existing `_projects` file with the assistant as the schema reference. Ask for a downloadable `.md` file with the case study and this metadata:

| Field | Purpose |
|---|---|
| `title` | Project title |
| `summary` | Homepage card description |
| `category` | Exactly `B2B Research`, `Scraping & Automation`, or `Creative Support` |
| `tags` | List of supported skills |
| `order` | Integer defining display order; use 6 for the next project |
| `type` | For example `Client project` or `Independent project` |
| `status` | For example `Delivered`, `Prototype`, or `Materials delivered` |
| `duration` | Optional engagement duration |
| `image` | Optional image path, for example `/assets/projects/my-tool/screenshot.png` |
| `image_alt` | Image description; required when using `image` |
| `project_url` | Optional real source/demo URL |
| `visual` | Optional existing illustration name: `leads`, `travel`, `directory`, `hospitality`, `monitor`, `workflow` |

The project layout is applied automatically. If no image or visual is specified, the card uses the generic workflow illustration.

## 2. Upload and commit

Open `_projects` in GitHub → **Add file → Upload files** → choose the `.md` file → **Commit changes**.

Or use **Add file → Create new file** and paste the contents. Use a short, lowercase filename, such as `amazon-agent.md`.

If using images, also upload those files into their referenced asset folder and commit them.

## 3. Check the site

After the Pages build succeeds, the new card appears automatically in All projects and its category. Its case study appears at `/projects/<filename-without-md>/`.

Example: `_projects/amazon-agent.md` generates `https://renukadeshmukh23.github.io/projects/amazon-agent/`.

## Update or reorder

Edit a project's Markdown file and commit. Change `order` to change its position. Avoid duplicate order numbers when you want a specific sequence.

To remove a project, delete its `.md` file and commit.

## Before saving

- Keep the opening and closing `---` lines around the metadata.
- Quote text containing a colon.
- Use the exact category labels above so filters work.
- Use real asset paths and supported claims.
- Keep client data and credentials out of the file.

Internal review notes belong outside the public project file. Outcome sections are optional; preserve accurate stage and contribution descriptions.
