import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Target, ExternalLink, Award, Heart, GraduationCap } from "lucide-react"
import Link from "next/link"

export function FundsSection() {
  const fundingData = [
    {
      project: "Snehagram Centre Support",
      raised: 5200000, // 52 Lakhs
      projected: 5200000, // 52 Lakhs
      description: "Supporting HIV-positive youth through comprehensive care programs",
      link: "/community#snehagram",
      status: "Ongoing",
      icon: Heart,
      color: "bg-gradient-to-r from-red-400 to-pink-500",
    },
    {
      project: "Vemana Hospital Revival",
      raised: 150000, // 1.5 Lakhs
      projected: 8150000, // 81.5 Lakhs
      description: "Modernizing healthcare infrastructure and implementing EMRS systems",
      link: "/community#vemana",
      status: "Active",
      icon: Award,
      color: "bg-gradient-to-r from-blue-400 to-cyan-500",
    },
    {
      project: "Socialabs Education Kits",
      raised: 150000, // 1.5 Lakhs
      projected: 150000, // 1.5 Lakhs
      description: "Providing affordable science experiment kits to government schools",
      link: "/community#socialabs",
      status: "Expanding",
      icon: GraduationCap,
      color: "bg-gradient-to-r from-green-400 to-emerald-500",
    },
  ]

  const totalFundsManagedDisplay = "₹55.0 Lakh / $64,000"
  const totalFundsManagedProjectedDisplay = "₹2 Crore / $230,000"

  const formatAmount = (amount: number, includeUsd = true) => {
    const inrLakhs = (amount / 100000).toFixed(1)
    if (!includeUsd) {
      return `₹${inrLakhs}L`
    }
    const usdApprox = (amount / 83).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    return `₹${inrLakhs}L / ${usdApprox}`
  }

  return (
    <section
      className="py-16 px-3 sm:px-4 lg:px-6"
      style={{
        background: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Funding & Impact</h2>
          <p className="text-base text-slate-300 max-w-3xl mx-auto">
            Funds managed to support community initiatives and social impact projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="text-center border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <DollarSign className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-300 mb-1">{totalFundsManagedDisplay}</div>
              <div className="text-blue-400 font-medium text-sm">Funds Managed</div>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-300 mb-1">{totalFundsManagedProjectedDisplay}</div>
              <div className="text-purple-400 font-medium text-sm">Funds Managed Projected</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-3 text-white">Supporting These Projects</h3>
          <p className="text-slate-300 text-sm">
            Funds have been allocated to support the following community initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {fundingData.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-sm"
              >
                <div className={`h-2 ${project.color}`}></div>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <IconComponent className={`h-5 w-5 mr-2 text-white`} />
                      <CardTitle className="text-base text-white">{project.project}</CardTitle>
                    </div>
                    <Badge className={`${project.color} text-white hover:opacity-90 text-xs`}>{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-slate-300 mb-3 text-sm">{project.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-base font-bold text-blue-400">
                        {formatAmount(
                          project.raised,
                          project.project !== "Snehagram Centre Support" &&
                            project.project !== "Vemana Hospital Revival" &&
                            project.project !== "Socialabs Education Kits",
                        )}
                      </div>
                      <div className="text-xs text-slate-400">Managed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-base font-bold text-slate-300">
                        {formatAmount(
                          project.projected,
                          project.project !== "Snehagram Centre Support" &&
                            project.project !== "Vemana Hospital Revival" &&
                            project.project !== "Socialabs Education Kits",
                        )}
                      </div>
                      <div className="text-xs text-slate-400">Managed Projected</div>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white border-slate-600 text-sm"
                    variant="outline"
                    size="sm"
                  >
                    <Link href={project.link}>
                      Learn More
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
