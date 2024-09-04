export type IStatus = "waiting" | "progress" | "failed" | "success"

export type IDailyTask = {
    time: string,
    title: string,
    desc: string,
    address: string,
    status: IStatus
}