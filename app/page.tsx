"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

interface FormData {
    name: string;
    email: string;
    number: string;
    message: string;
}

// use zod resolver to validate form
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
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            {/* form */}
            <form
                className='flex flex-col gap-4'
                onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <input
                    type='text'
                    placeholder='name'
                    {...register("name")}
                    className='p-2 border border-gray-200 rounded-md'
                />
                {errors.name && <p>{errors.name.message}</p>}

                {/* email */}
                <input
                    type='email'
                    placeholder='email'
                    {...register("email")}
                    className='p-2 border border-gray-200 rounded-md'
                />
                {errors.email && <p>{errors.email.message}</p>}

                {/* number */}
                <input
                    type='text'
                    placeholder='number'
                    {...register("number")}
                    className='p-2 border border-gray-200 rounded-md'
                />
                {errors.number && <p>{errors.number.message}</p>}

                {/* message */}
                <textarea
                    placeholder='message'
                    {...register("message")}
                    className='p-2 border border-gray-200 rounded-md'
                />
                {errors.message && <p>{errors.message.message}</p>}

                {/* submit */}
                <button
                    type='submit'
                    className='p-2 bg-blue-500 text-white rounded-md'>
                    submit
                </button>
            </form>
        </main>
    );
}
