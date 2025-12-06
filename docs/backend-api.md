Backend API mapping for Penny-Debt (website)

This document lists the implemented website API endpoints (under `/api/v1/website/*`), the HTTP method, expected request payload, example response shape, and where the frontend calls them.

Notes:
- Backend files lived under `apps/crm-backend/src/routes/website/*`.
- Models are in `apps/crm-backend/models-website/*`.
- Frontend base URL is configured via `apps/website/.env` or `VITE_API_BASE_URL` (default `http://localhost:5000/api/v1/website`).

Routes implemented (summary)

- Auth
  - POST /api/v1/website/auth/customer-login
    - Request: { phone }
    - Response: { token, role }
    - Frontend: `apps/website/src/services/auth.js` -> `loginCustomer`
  - POST /api/v1/website/auth/employee-login
    - Request: { email, password? }
    - Response: { token, role }
    - Frontend: `apps/website/src/services/auth.js` -> `loginEmployee`
  - POST /api/v1/website/auth/admin-login
    - Request: { username, password? }
    - Response: { token, role }
    - Frontend: `apps/website/src/services/auth.js` -> `loginAdmin`
  - POST /api/v1/website/auth/register
    - Request: { name, email, phone, password }
    - Response: { token, role }

- OTP
  - POST /api/v1/website/otp/send
    - Request: { phone }
    - Response: { success: true, message, id }
    - Frontend: `apps/website/src/services/api.js` -> `otpService.send`
  - POST /api/v1/website/otp/verify
    - Request: { phone, code }
    - Response: { success: true }
    - Frontend: `apps/website/src/services/api.js` -> `otpService.verify`

- Leads
  - POST /api/v1/website/leads/submit
    - Request: { name, email, phone, totalDebt, monthlyIncome, ... }
    - Response: created lead object
    - Frontend: `apps/website/src/services/api.js` -> `leadService.submit`
  - GET /api/v1/website/leads
    - Request: ?limit
    - Response: [lead]
    - Frontend: `leadService.getAll` (if used)

- Contacts
  - POST /api/v1/website/contacts/submit
    - Request: { name, email, phone, message, ... }
    - Response: created contact
    - Frontend: `contactService.submit`
  - GET /api/v1/website/contacts
    - Response: [contact]

- Careers
  - POST /api/v1/website/careers/submit
    - Request: { name, email, phone, resumeUrl?, message }
    - Response: created career entry
    - Frontend: `careerService.submit`
  - GET /api/v1/website/careers

- Loan Applications
  - POST /api/v1/website/loan-applications/submit
    - Request: application form data
    - Response: created application
    - Frontend: `loanApplicationService.submit`
  - GET /api/v1/website/loan-applications

- Testimonials
  - GET /api/v1/website/testimonials
    - Response: [testimonial]
    - Frontend: `testimonialService.getAll`

- Services
  - GET /api/v1/website/services
    - Response: [service]
    - Frontend: `serviceService.getAll`

- FAQs
  - GET /api/v1/website/faqs
    - Response: [faq]
    - Frontend: `faqService.getAll`

- Blogs
  - GET /api/v1/website/blogs
    - Response: [blog]
    - Frontend: `blogService.getAll`
  - GET /api/v1/website/blogs/:id
    - Response: blog object
    - Frontend: `blogService.getById`

Health-check
- GET /health
  - Response: { status, timestamp, environment, mongodb: { connected, state } }
  - File: `apps/crm-backend/src/app.js`

DB and config
- Mongo connection implemented in `apps/crm-backend/src/config/db.js` using `process.env.MONGODB_URI`.
- Sample `.env` contains `MONGODB_URI` and `JWT_SECRET`.

Next steps / Recommendations
- Run the backend locally to perform a smoke test: see instructions below.
- Confirm `VITE_API_BASE_URL` in `apps/website/.env` points to the running backend (e.g. http://localhost:5000/api/v1/website).
- If additional endpoints are required by frontend, add them under `src/routes/website/` and wire to the appropriate model/controller.

Quick run (development)

1. From repo root, start backend:

```powershell
cd .\apps\crm-backend
npm install
npm run dev  # or `node server.js` if dev script not present
```

2. Confirm health:

```powershell
Invoke-WebRequest http://localhost:5000/health -UseBasicParsing | ConvertFrom-Json
```

3. Start frontend and set `VITE_API_BASE_URL` to `http://localhost:5000/api/v1/website` (already in `apps/website/.env`).

If you want, I can now run a local smoke test (start the backend and call a couple of endpoints) and attach request/response logs.
