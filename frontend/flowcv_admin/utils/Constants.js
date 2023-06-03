import { AiOutlineCheck } from "react-icons/ai";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaUsers } from "react-icons/fa";
import {
  MdAssignmentTurnedIn,
  MdDescription,
  MdWorkspacePremium,
} from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const DASHBOARD = Object.freeze({
  CARD: [
    { id: 1, icon: MdDescription, title: "Resumes created" },
    { id: 2, icon: FaUsers, title: "Users" },
    { id: 3, icon: MdAssignmentTurnedIn, title: "Subscriptions" },
    { id: 4, icon: FaRegMoneyBillAlt, title: "Total Revenue" },
    { id: 5, icon: BsCreditCard2Back, title: "Purchases" },
    { id: 6, icon: MdWorkspacePremium, title: "Premium Purchases" },
  ],
});

export const SUBSCRIPTIONS = Object.freeze({
  BASIC: [
    { id: 1, icon: AiOutlineCheck, title: "One Resume" },
    { id: 2, icon: AiOutlineCheck, title: "Unlimited Downloads" },
    { id: 3, icon: RxCross2, title: "Unlimited Templates" },
    { id: 4, icon: RxCross2, title: "All features unlocked" },
  ],
  STANDARD: [
    { id: 5, icon: AiOutlineCheck, title: "Ten Resume" },
    { id: 6, icon: AiOutlineCheck, title: "Unlimited Downloads" },
    { id: 7, icon: RxCross2, title: "Unlimited Templates" },
    { id: 8, icon: RxCross2, title: "All features unlocked" },
  ],
  PREMIUM: [
    { id: 9, icon: AiOutlineCheck, title: "Unlimited Resume" },
    { id: 10, icon: AiOutlineCheck, title: "Unlimited Downloads" },
    { id: 11, icon: AiOutlineCheck, title: "Unlimited Templates" },
    { id: 12, icon: AiOutlineCheck, title: "All features unlocked" },
  ],
});

export const CONTENT = Object.freeze({
  CONTENT: ["Site Banner Title", "Site Banner Description"],
  IMAGE: ["Banner Image", "Footer Image"],
});
