Document: Forms and Contact System
Version: 1.0.0
Status: Active
Last Updated: 15 August 2026

# GoWindSun Website — Forms & Contact System Specification

This document details the form fields, validation schema, submission handling, state transitions, security safeguards, and contact credentials for the interactive RFP request form in [`src/components/contact/ContactForm.tsx`](file:///c:/Website/GoWindSun-Website/src/components/contact/ContactForm.tsx).

---

## 1. Contact Credentials & Office Information

* **Corporate Entity:** GoWindSun India Private Limited
* **Registered Location:** Pune, Maharashtra – India
* **Primary Executive Email:** `director@gowindsun.com`
* **Secondary Corporate Email:** `gowindnsun@gmail.com`
* **Direct Telephone:** `+91 90110 71 864` (`+919011071864`)

---

## 2. Contact Form Field Schema & Validation

The form utilizes `react-hook-form` paired with a Zod validation schema (`rfpSchema`):

```typescript
const rfpSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Valid work email is required"),
  phone: z.string().min(10, "Valid 10-digit mobile/landline required"),
  companyName: z.string().min(2, "Company/Organization name required"),
  projectType: z.string().min(1, "Select primary project interest"),
  estimatedCapacity: z.string().min(1, "Select estimated MW size"),
  message: z.string().min(10, "Please provide brief project details or location"),
});
```

### 2.1 Field Breakdown
1. **Full Name (`fullName`):** Text input, required (min 2 chars).
2. **Work Email (`workEmail`):** Email input, required.
3. **Contact Phone (`phone`):** Tel input, required (min 10 digits).
4. **Organization (`companyName`):** Text input, required.
5. **Primary Interest (`projectType`):** Dropdown selector:
   * `Utility Solar` (Utility Solar EPC)
   * `Wind Infrastructure` (Wind Energy Infrastructure)
   * `Solar-Wind Hybrid` (Solar-Wind Hybrid Power Plant)
   * `BESS Storage` (BESS Battery Energy Storage)
   * `Technical Advisory` (Technical Advisory & Feasibility)
   * `EHV Substation` (EHV Substation & Grid Integration)
6. **Estimated Scale (`estimatedCapacity`):** Dropdown selector:
   * `5MW - 10MW` (Captive / Industrial)
   * `10MW - 50MW` (Commercial / SEZ)
   * `50MW - 150MW` (Utility Scale)
   * `150MW+` (Mega Solar/Wind Park)
   * `Advisory Only` (Advisory / Consulting Only)
7. **Scope Details (`message`):** Textarea, required (min 10 chars).

---

## 3. Submission Workflow & State Transitions

1. **User Submission:** Form submission triggers `handleSubmit(onSubmit)`.
2. **Loading State:** Button enters loading state (`isSubmitting = true`) displaying an inline spinner.
3. **Async Simulation:** Processes submission (`await new Promise(res => setTimeout(res, 1000))`).
4. **Success State Transition:** Toggles `submitted = true`, hiding inputs and displaying the **"Enquiry Received"** success card:
   > "Thank you. A senior clean energy director from GoWindSun India Private Limited will review your project parameters and respond shortly."
5. **Reset Action:** Includes "Submit Another Request" button to reset form state.

---

## 4. Security & NDA Guidelines

* All submitted form data is protected under enterprise NDA guidelines.
* **Secrets Safeguard:** No email API keys, passwords, database strings, or private keys are exposed in the client-side source code or documentation.
