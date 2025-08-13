import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";
import { useFormState } from "react-dom";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function (formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form action={mutation.mutate}>
          <ContactInput name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
}

function ContactInput(props) {
  const { pending } = useFormState();
  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      disabled={pending}
      type={props.type}
    />
  );
}