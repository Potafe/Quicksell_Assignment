import { ReactComponent as Backlog } from '../assets/icons_FEtask/Backlog.svg';
import { ReactComponent as ToDo } from '../assets/icons_FEtask/To-do.svg';
import { ReactComponent as InProgress } from '../assets/icons_FEtask/in-progress.svg';
import { ReactComponent as Done } from '../assets/icons_FEtask/Done.svg';
import { ReactComponent as Canceled } from '../assets/icons_FEtask/Cancelled.svg';
import { ReactComponent as NoPriori } from '../assets/icons_FEtask/No-priority.svg';
import { ReactComponent as MediumPriori } from '../assets/icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as HighPriori } from '../assets/icons_FEtask/Img - High Priority.svg';
import { ReactComponent as LowPriori } from '../assets/icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as UrgentPriori } from '../assets/icons_FEtask/SVG - Urgent Priority colour.svg';

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <NoPriori />
        case "Low": return <LowPriori />
        case "Medium": return <MediumPriori />
        case "High": return <HighPriori />
        case "Urgent": return <UrgentPriori />
        default: return <Canceled />
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <Backlog />
        case "Todo": return <ToDo />
        case "In progress": return <InProgress />
        case "Done": return <Done />
        case "Canceled": return <Canceled />
        default: return <Canceled />
    }
}