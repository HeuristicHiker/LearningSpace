package exercise

type Item struct {
	Name string
	Type string
}

type Player struct {
	Name      string
	Inventory []Item
}

func (p *Player) pickupItem(item Item) {
	p.Inventory = append(p.Inventory, item)
}

func (p *Player) dropItem(itemName string) {
	for i, item := range p.Inventory {
		if item.Name == itemName {
			p.Inventory = append(p.Inventory[:i], p.Inventory[i+1:]...)
			return
		}
	}
}

func (p *Player) useItem(itemName string) {
	for i, item := range p.Inventory {
		if item.Name == itemName {
			p.Inventory = append(p.Inventory[:i], p.Inventory[i+1:]...)
			return
		}
	}
}
