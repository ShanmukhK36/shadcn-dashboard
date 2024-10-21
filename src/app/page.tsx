import PageTitle from "@/components/PageTitle";
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import Card, { CardContent, CardProps } from "@/components/ui/Card";
import BarChart from "@/components/ui/BarChat";
import SalesCard from "@/components/ui/SalesCard";
import { SalesProps } from "@/components/ui/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subcriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 from last hour",
    icon: Activity
  }
]

const userSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jacson Lee",
    email: "jacson.lee@email.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    saleAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "william.kim@email.com",
    saleAmount: "+$259.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    saleAmount: "+$39.00"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {cardData.map((d,i)=>
          <Card key = {i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        )}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold ">Overview</p>
          <BarChart />
        </CardContent>
        {/*   */}
        <CardContent className="flex justify-between gap-4 ">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month
            </p>
          </section>
          {userSalesData.map((d,i) => 
            <SalesCard key={i}
              name={d.name}
              email={d.email}
              saleAmount={d.saleAmount}
            />
          )}
        </CardContent>
      </section>
    </div>
  );
}
