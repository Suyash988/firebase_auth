'use client'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'


const formSchema = z.object({
    email: z.string().email( {
        message: "Email must have the @ and characters.",
      }),
    password: z.string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character (@$!%*?&)"
    }),
   
  })

export default function LoginForm() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password:"",
      },
    })  
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <main className=" h-full justify-center items-center absolute m-10 mt-20 overflow-hidden ">
      <div className="flex flex-col justify-center overflow-hidden">
         <h1 className='font-bold text-2xl'>Login here</h1>
         <p className="font-semibold text-gray-500 mt-2">Login to your account, Enter the details.</p>
      </div>     
       <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
           <FormField
             control={form.control}
             name="email"
             render={({ field }) => (
               <FormItem>
                 <FormLabel>Email</FormLabel>
                 <FormControl>
                   <Input placeholder="xyz@email.com" {...field} />
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
                   <Input placeholder="1234@1234" {...field} />
                 </FormControl>
                 <FormMessage />
               </FormItem>
             )}
           />
           <div className="flex gap-10 items-center">
            <Button type="submit" >Login</Button>
            <Link href="/"><p className="relative justify-center text-blue-500 hover:underline">Forgot password</p>
            </Link>
            
           </div>
           
         </form>
       </Form>
      <div className="flex gap-2 mt-4">
        <p className="">Don't have an account?</p>
        <Link href="/signup" className='text-blue-500 hover:underline'>Signup</Link>
      </div>
    </main> 
  )
}

