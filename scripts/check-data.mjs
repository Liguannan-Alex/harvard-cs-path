import { courses, paths, verification } from "../src/data.js";

const errors = [];
const ids = new Set();

for (const course of courses) {
  if (ids.has(course.id)) errors.push(`Duplicate course id: ${course.id}`);
  ids.add(course.id);

  for (const field of ["id", "code", "tier", "currentTerm", "verificationStatus"]) {
    if (!course[field]) errors.push(`${course.id} missing ${field}`);
  }

  if (!course.title?.zh || !course.title?.en) errors.push(`${course.id} missing bilingual title`);
  if (!course.resources?.some((resource) => resource.type === "official")) {
    errors.push(`${course.id} missing official resource`);
  }
  if (!course.sources?.length) errors.push(`${course.id} missing source links`);
  if (!course.cost?.zh || !course.certificate?.zh) {
    errors.push(`${course.id} missing cost/certificate copy`);
  }
}

for (const path of paths) {
  for (const stage of path.stages) {
    for (const id of stage.courseIds) {
      if (!ids.has(id)) errors.push(`${path.id} references unknown course ${id}`);
    }
  }
}

if (!verification.verifiedAt || !verification.sources.length) {
  errors.push("verification metadata incomplete");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Checked ${courses.length} courses and ${paths.length} paths.`);
