
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

import { personal } from '../../data/personal';
import { SectionHeading } from '../ui/SectionHeading';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Enter a valid email address.'),
  subject: z.string().min(3, 'Please add a subject.'),
  message: z.string().min(10, 'Message should be at least 10 characters.'),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const [feedback, setFeedback] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const submit = async (data: FormValues) => {
    setStatus('loading');
    setFeedback('');

    const {
      VITE_EMAILJS_SERVICE_ID: sid,
      VITE_EMAILJS_TEMPLATE_ID: tid,
      VITE_EMAILJS_PUBLIC_KEY: key,
    } = import.meta.env;

    try {
      if (sid && tid && key) {
        await emailjs.send(
          sid,
          tid,
          {
            from_name: data.name,
            reply_to: data.email,
            subject: data.subject,
            message: data.message,
          },
          key
        );

        setStatus('success');
        setFeedback(
          'Thanks — your message has been sent. I’ll be in touch soon.'
        );

        reset();
      } else {
        const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;

        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
          data.subject
        )}&body=${encodeURIComponent(body)}`;

        setStatus('success');
        setFeedback(
          'Your email app has been opened with the message ready to send.'
        );
      }
    } catch {
      setStatus('error');
      setFeedback(
        'Something went wrong. Please email me directly instead.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="section-pad contact-section"
    >
      <div className="wrap">
        <SectionHeading
          eyebrow="LET'S CONNECT"
          title="Have a project in mind? Let's build something great."
          description="I'm always interested in discussing exciting frontend opportunities, innovative products, and challenging engineering problems."
        />

        <div className="contact-grid">
          <div className="contact-aside">
            <h3>Let's start a conversation.</h3>

            <p>
              Have an opportunity, a product idea, or just want to talk
              frontend? My inbox is open.
            </p>

            <a
              className="contact-detail"
              href={`mailto:${personal.email}`}
            >
              <span>
                <Mail />
              </span>

              <div>
                <small>EMAIL ME</small>
                <b>{personal.email}</b>
              </div>

              <ArrowUpRight />
            </a>

            <a
              className="contact-detail"
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
            >
              <span>
                <Phone />
              </span>

              <div>
                <small>CALL ME</small>
                <b>{personal.phone}</b>
              </div>

              <ArrowUpRight />
            </a>

            <div className="contact-detail">
              <span>
                <MapPin />
              </span>

              <div>
                <small>LOCATION</small>
                <b>{personal.location}</b>
              </div>
            </div>

            <div className="contact-social">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin /> LinkedIn
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github /> GitHub
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit(submit)}
            noValidate
          >
            <div className="form-heading">
              <span>YOUR MESSAGE</span>
              <small>I'll get back to you as soon as I can.</small>
            </div>

            <div className="form-row">
              <label>
                Full name

                <input
                  placeholder="Your name"
                  {...register('name')}
                />

                {errors.name && (
                  <em>{errors.name.message}</em>
                )}
              </label>

              <label>
                Email address

                <input
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                />

                {errors.email && (
                  <em>{errors.email.message}</em>
                )}
              </label>
            </div>

            <label>
              Subject

              <input
                placeholder="What would you like to discuss?"
                {...register('subject')}
              />

              {errors.subject && (
                <em>{errors.subject.message}</em>
              )}
            </label>

            <label>
              Message

              <textarea
                rows={5}
                placeholder="Tell me a little about it..."
                {...register('message')}
              />

              {errors.message && (
                <em>{errors.message.message}</em>
              )}
            </label>

            <button
              className="button primary submit-button"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                'Sending…'
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>

            {feedback && (
              <div
                className={`form-feedback ${status}`}
                role="status"
              >
                {status === 'success' ? (
                  <CheckCircle2 size={17} />
                ) : (
                  <AlertCircle size={17} />
                )}

                {feedback}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
