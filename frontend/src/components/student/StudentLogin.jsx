import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { axiosClient } from "../../api/axios";

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 characters" })
    .max(30),
});

export default function StudentLogin() {

     const form = useForm({
       resolver: zodResolver(formSchema),
       defaultValues: {
         email: "yassinelaitouss@gmail.com",
         password: "12345678",
       },
     });

     // 2. Define a submit handler.
     const onSubmit = async values => {
       const data = await axiosClient.post("/login", values)
       console.log(data);
     }

  return (
    <>
      <div className="flex  justify-center p-6 rounded-md shadow-2xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full max-w-sm">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="w-full" // This makes the input field take full width of its container
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password"
                      placeholder="Enter your password"
                      {...field}
                      className="w-full" // This makes the input field take full width of its container
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
}
