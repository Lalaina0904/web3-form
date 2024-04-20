"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(3, {
        message: "name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "email must be a valid email address.",
    }),
    number: z.string().min(10, {
        message: "number must be at least 10 characters.",
    }),

    message: z.string().min(5, {
        message: "message must be at least 05 characters.",
    }),
});

export default function Home() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            number: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-8 w-full lg:w-1/2 '>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='John'
                                        {...field}
                                        className='border-slate-400'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder='john@gmail.com'
                                        {...field}
                                        className='border-slate-400'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='number'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number</FormLabel>
                                <FormControl>
                                    <Input
                                        type='text'
                                        {...field}
                                        className='border-slate-400'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder='message here'
                                        {...field}
                                        className='border-slate-400'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
        </main>
    );
}
