# Harvard CS Path Verification Notes

Last verified: 2026-05-08

This document records the sources used to turn the exported prototype into a maintainable, source-backed learning tool.

## Primary Sources

- Harvard CS concentration requirements: https://csadvising.seas.harvard.edu/concentration/requirements/
- Harvard CS course tags: https://csadvising.seas.harvard.edu/concentration/courses/tags/
- Harvard CS courses and placement guidance: https://csadvising.seas.harvard.edu/concentration/courses/
- CS50x certificate rules: https://cs50.harvard.edu/x/certificate/
- CS50 course catalog certificate policy: https://cs50.harvard.edu/web/courses/

## Corrections Applied

| Prototype claim | Verified correction | Reason |
| --- | --- | --- |
| CS1430 Computer Vision | CS1430 Computer Networks | Harvard CS course tags list CS1430 as Computer Networks. |
| CS1410 Operating Systems | CS1610 Operating Systems | Harvard catalog and course site list Operating Systems as COMPSCI 1610. |
| CS1200 as advanced/intermediate algorithms | CS1240 Data Structures and Algorithms | Harvard CS tags identify CS1240 as the intermediate algorithms course. |
| CS2241 Computer Systems | CS2241 Algorithms at the Ends of the Wire | Harvard CS tags list CS2241 under formal reasoning/algorithms. |
| General "0 yuan / free certificate" wording | Split by course type | CS50 has free CS50 Certificates plus paid edX verified certificates; Harvard College courses are not MOOC certificate courses. |

## Course Audit Table

| ID | Current label | Term/year status | Certificate/cost boundary |
| --- | --- | --- | --- |
| CS50x | CS50x Introduction to Computer Science | CS50x 2026 | Free CS50 Certificate if requirements met; paid edX verified certificate optional. |
| CS50P | CS50 Python | Current CS50 OpenCourseWare | Free CS50 Certificate if requirements met; paid edX verified certificate optional. |
| CS51 | Abstraction and Design in Computation | Spring 2026 | Harvard course; no public MOOC certificate. |
| CS61 | Systems Programming and Machine Organization | Latest public site observed 2025; annual core per advising | Harvard course; no public MOOC certificate. |
| CS20 | Discrete Mathematics for Computer Science | Spring 2026 | Harvard course; no public MOOC certificate. |
| CS1200 | Introduction to Algorithms, Computability, and Complexity | Spring 2026 | Harvard course; no public MOOC certificate. |
| CS1210 | Introduction to Theoretical Computer Science | Fall 2026 | Harvard course; no public MOOC certificate. |
| STAT110 | Introduction to Probability | Harvard Online window observed Jul 2025-Jul 2026; Harvard College Fall 2026 listing exists | Public videos/textbook free; edX/Harvard Online verified certificate paid. |
| MATH21A/B | Multivariable Calculus and Linear Algebra | Spring/Fall 2026 listings | Harvard math courses; no public MOOC certificate. |
| CS1240 | Data Structures and Algorithms | Spring 2026 | Harvard course; no public MOOC certificate. |
| CS1610 | Operating Systems | Spring 2026 | Harvard course; no public MOOC certificate. |
| CS1810 | Machine Learning | Spring 2026 | Harvard course; no public MOOC certificate. |
| CS50AI | Introduction to AI with Python | Current CS50 OpenCourseWare | Free CS50 Certificate if requirements met; paid edX verified certificate optional. |
| CS50W | Web Programming with Python and JavaScript | Current CS50 OpenCourseWare | Free CS50 Certificate if requirements met; paid edX verified certificate optional. |
| CS50SQL | Introduction to Databases with SQL | CS50 SQL 2024 course, 2026 FAQ maintained | Free CS50 Certificate if requirements met; paid edX verified certificate optional. |
| CS1430 | Computer Networks | Tags verified 2026 | Harvard course; no public MOOC certificate. |
| CS2241 | Algorithms at the Ends of the Wire | Tags verified 2026; offering cycle varies | Harvard course; no public MOOC certificate. |

## Maintenance Rule

When adding or changing a course, update `src/data.js` first, add at least one official source URL, and run:

```bash
npm run check
```
