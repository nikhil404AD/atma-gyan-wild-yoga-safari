import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { packages } from "@/data/packages";
import { site } from "@/data/site";
import { inquiryMailto, inquiryWhatsApp, validateInquiry, type Inquiry, type InquiryErrors } from "@/lib/booking";

export function BookingForm({ defaultPackage = "" }: { defaultPackage?: string }) {
  const [v, setV] = useState<Inquiry>({
    name: "", email: "", phone: "", arrival: "", departure: "", guests: "1", message: "",
    packageTitle: packages.find((p) => p.slug === defaultPackage)?.title ?? "",
  });
  const [pkg, setPkg] = useState(defaultPackage);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [ready, setReady] = useState(false);

  const set = (k: keyof Inquiry) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { setV({ ...v, [k]: e.target.value }); setReady(false); };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateInquiry(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setReady(false);
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setReady(true);
  };

  const field = "mt-1.5 w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm focus-visible:outline-2 aria-[invalid=true]:border-destructive";
  const F = ({ k, label, type = "text", req, ...rest }: { k: keyof Inquiry; label: string; type?: string; req?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
      <label htmlFor={`f-${k}`} className="text-sm font-bold">{label}{req && <span aria-hidden className="text-destructive"> *</span>}</label>
      <input id={`f-${k}`} type={type} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} required={req} className={field} {...rest} />
      {errors[k] && <p id={`e-${k}`} role="alert" className="mt-1 text-xs text-destructive">{errors[k]}</p>}
    </div>
  );

  return (
    <form onSubmit={submit} noValidate className="space-y-5 rounded-xl border bg-card p-6 shadow-soft md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {F({ k: "name", label: "Name", req: true, autoComplete: "name", maxLength: 100 })}
        {F({ k: "email", label: "Email", type: "email", req: true, autoComplete: "email", maxLength: 255 })}
        {F({ k: "phone", label: "Phone or WhatsApp", type: "tel", autoComplete: "tel", maxLength: 30 })}
        <div>
          <label htmlFor="f-packageTitle" className="text-sm font-bold">Retreat</label>
          <select id="f-packageTitle" value={pkg} onChange={(e) => { setPkg(e.target.value); setV({ ...v, packageTitle: packages.find((p) => p.slug === e.target.value)?.title ?? "" }); }} className={field}>
            <option value="">Not sure yet / custom stay</option>
            {packages.map((p) => <option key={p.slug} value={p.slug}>{p.title} — {p.durationLabel}</option>)}
          </select>
        </div>
        {F({ k: "arrival", label: "Arrival date", type: "date", req: true })}
        {F({ k: "departure", label: "Departure date", type: "date", req: true, min: v.arrival || undefined })}
        {F({ k: "guests", label: "Number of guests", type: "number", req: true, min: 1, max: 20 })}
      </div>
      <div>
        <label htmlFor="f-message" className="text-sm font-bold">Questions or special requests</label>
        <textarea id="f-message" rows={4} maxLength={1000} value={v.message} onChange={set("message")} aria-invalid={!!errors.message} className={field} />
      </div>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">Prepare my inquiry</button>

      <div aria-live="polite">
        {ready && (
          <div className="rounded-lg border border-sage bg-muted p-5">
            <p className="font-display text-2xl text-forest">Your inquiry is ready to send</p>
            <p className="mt-1 text-sm text-muted-foreground">Choose how to send it. This is an inquiry only — your stay is confirmed once the host replies.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={inquiryWhatsApp(v)} target="_blank" rel="noreferrer" className="btn btn-primary"><MessageCircle className="size-4" />Send via WhatsApp</a>
              <a href={inquiryMailto(v)} className="btn btn-outline"><Mail className="size-4" />Send via email</a>
              <a href={site.phoneHref} className="btn btn-outline"><Phone className="size-4" />Call</a>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
