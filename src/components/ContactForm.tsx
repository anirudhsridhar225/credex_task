"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, CheckCircle2, Mail, Send } from "lucide-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    company: z.string(),
    licenseType: z.enum(["GNU", "Apache", "MIT", "GPL", "Other"], { required_error: "Please select a license type" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null)

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            licenseType: "GPL",
            message: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000))
            console.log("Form submitted:", data)
            setFormStatus("success")
            reset()
        } catch (error) {
            console.error("Error submitting form:", error)
            setFormStatus("error")
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setFormStatus(null), 5000)
        }
    }

    return (
        <section className="w-full bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-10 text-center">
                    <Mail className="h-12 w-12 text-blue-500 dark:text-blue-400 mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-3">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                        Have questions about our services? Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 md:p-8">
                        {formStatus === "success" && (
                            <Alert className="bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800 mb-6">
                                <CheckCircle2 className="h-4 w-4" />
                                <AlertTitle>Success!</AlertTitle>
                                <AlertDescription>Your message has been sent successfully. We'll get back to you soon.</AlertDescription>
                            </Alert>
                        )}

                        {formStatus === "error" && (
                            <Alert variant="destructive" className="mb-6">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>There was a problem sending your message. Please try again later.</AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm font-medium dark:text-white">Name</Label>
                                <Input
                                    id="name"
                                    {...register("name")}
                                    placeholder="Your name"
                                    className="rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white"
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && <p className="text-sm text-red-500 dark:text-red-400">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium dark:text-white">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    placeholder="your.email@example.com"
                                    className="rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white"
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email && <p className="text-sm text-red-500 dark:text-red-400">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-sm font-medium dark:text-white">Company</Label>
                                <Input
                                    id="company"
                                    {...register("company")}
                                    placeholder="Your company name"
                                    className="rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="licenseType" className="text-sm font-medium dark:text-white">License Type</Label>
                                <Controller
                                    name="licenseType"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger className="rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white">
                                                <SelectValue placeholder="Select a license type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="GNU">GNU</SelectItem>
                                                <SelectItem value="Apache">Apache</SelectItem>
                                                <SelectItem value="MIT">MIT</SelectItem>
                                                <SelectItem value="GPL">GPL</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.licenseType && <p className="text-sm text-red-500 dark:text-red-400">{errors.licenseType.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium dark:text-white">Message</Label>
                                <Textarea
                                    id="message"
                                    {...register("message")}
                                    placeholder="How can we help you?"
                                    className="rounded-md border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 dark:text-white min-h-[120px]"
                                    aria-invalid={errors.message ? "true" : "false"}
                                />
                                {errors.message && <p className="text-sm text-red-500 dark:text-red-400">{errors.message.message}</p>}
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? "Sending..." : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
